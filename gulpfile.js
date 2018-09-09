// Gulp
const gulp = require('gulp');

// Gulp helpers
const insert = require('gulp-insert');
const sequence = require('gulp-sequence');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const glob = require('glob');
const es = require('event-stream');
const del = require('del');
const stringify = require('stringify');

// SCSS
const sass = require('gulp-sass');
const sassify = require('sassify');

// ESLint configuration file
const eslintConfig = require('./.eslintrc.json');

// Define relevant paths
const paths = {
  src: {
    html: './src/**/*.html',
    scripts: './src/**/*.js',
    stylesheets: ['./src/**/*.css', './src/**/*.scss', './src/**/*.sass'],
  },
  html: './src/*.html',
  scripts: './src/*.js',
  stylesheets: ['src/styles/*.css', 'src/styles/*.scss', 'src/styles/*.sass'],
  dest: './build/',
};

// --- Lint ---
gulp.task('lint:scripts', () => {
  return gulp.src(paths.scripts)
    .pipe(eslint(eslintConfig))
    .pipe(eslint.format());
});

gulp.task('lint', ['lint:scripts']);

// --- Build ---
gulp.task('build:clean', (cb) => {
  return del(paths.dest, cb);
});

function buildOut(done, prependee, appendee, extname) {
  glob(paths.scripts, (err, files) => {
    if (err) done(err);

    const tasks = files.map(entry => {
      return browserify({
          entries: [entry],
        })
        .transform('babelify', {
          presets: ['es2015', 'es2016', 'es2017', 'react'],
          plugins: [
            ['transform-react-jsx', {
              'pragma': 'jsxr',
            }],
          ],
        })
        .transform(sassify, {
          sourceMap: false,
        })
        .transform(stringify, {
          appliesTo: {
            includeExtensions: ['.html'],
          },
          minify: true,
        })
        .bundle()
        .pipe(source(entry.replace('./src/', '')))
        .pipe(rename({
          extname,
        }))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(insert.prepend(prependee))
        .pipe(insert.append(appendee))
        .pipe(gulp.dest(paths.dest));
    });

    es.merge(tasks).on('end', done);
  });
}

// Default minified code.
const scriptsPrepend = '/* jshint ignore:start */\n';
const scriptsAppend = '\n/* jshint ignore:end */';
const extjs = '.bundle.js';
gulp.task('build:scripts', (done) => buildOut(done, scriptsPrepend, scriptsAppend, extjs));

// Build target-friendly code
const targetPrepend = '<script type="text/javascript">\ntry {\n/* jshint ignore:start */\n\t\t';
const targetAppend = '\n/* jshint ignore:end */\n} catch(e) {\n\tconsole.error("CH Error: ", e);\n}\n<\/script>';
const exthtml = '.bundle.html';
gulp.task('build:target', (done) => buildOut(done, targetPrepend, targetAppend, exthtml));

// Build experiment
gulp.task('build', () => {
  return sequence('lint', 'build:clean', 'build:scripts')();
});

// Watch and rebuild when experiment files change
gulp.task('watch', () => {
  gulp.watch(paths.src.html, ['build']);
  gulp.watch(paths.src.scripts, ['build']);
  gulp.watch(paths.src.stylesheets, ['build']);
});

// Default task
gulp.task('default', ['build', 'watch']);

// Build target-html
gulp.task('target', ['build', 'build:target']);
