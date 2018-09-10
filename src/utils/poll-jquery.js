export default function pollJquery(callback) {
  const $ = window.$;
  if ($ && typeof $ === 'function' && $.fn && $.fn.on && typeof $.fn.on === 'function') {
    callback($);
  } else {
    setTimeout(pollJquery, 250, callback);
  }
}