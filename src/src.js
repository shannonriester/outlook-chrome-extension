import observePageChange from './react-helpers/observe-page-change.js';
import when from './utils/when.js';
import scss from './styles/calendar.scss';

$('head').append(`<style>${scss}</style>`);
when('._wx_f > div:nth-child(2)', observePageChange);
