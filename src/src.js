import observePageChange from './react-helpers/observe-page-change.js';
import waitForElement from './utils/wait-for-element.js';
import pollJquery from './utils/poll-jquery.js';
import ajaxRequest from './utils/poll-jquery.js';
import scss from './styles/calendar.scss';

pollJquery(($) => {
  const $head = $('head');
  if (!$head.find('.noc-styles').length) $head.append(`<style class="noc-styles">${scss}</style>`);
  ajaxRequest(() => {
    waitForElement('._wx_f > div:nth-child(2)', (wxf) => {
      waitForElement('._wx_v', observePageChange);
    });
  });
});
