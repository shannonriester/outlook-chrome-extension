import observePageChange from './spa-helpers/observe-page-change.js';
import updateCalendar from './outlook/render-calendar';
import pollJquery from './utils/poll-jquery.js';
import scss from './styles/calendar.scss';

let counter = 0;
const interval = setInterval(() => {
  // OBSERVER-TARGETS FOR PAGE CHANGE
  if (elementFound('._wx_f > div:nth-child(2)') && elementFound('._wx_v')) {

    // IS OUTLOOK CALENDAR
    if (location.search.indexOf('path=/calendar') !== -1) {
      if (elementFound('._wx_u1') > 1 &&
        elementHasAttr('._wx_m1', 'style') &&
        elementHasAttr('._wx_m1', 'style', 'left') &&
        elementHasAttr('._wx_m1', 'style', 'width') &&
        elementHasAttr('._wx_m1', 'style', 'height')) {

        pollJquery(($) => {
          const $head = $('head');
          if (!$head.find('.noc-styles').length) $head.append(`<style class="noc-styles">${scss}</style>`);
          updateCalendar();
          observePageChange();
        });

        return clearInterval(interval);
      }
    
    // START OBSERVER && WAIT FOR CAL TO APPEAR
    } else {
      observePageChange();
      clearInterval(interval);
    }
  }

  if (counter >= 40) {
    return clearInterval(interval);
  }

  counter++;
  console.log('interval running....', counter);
}, 700);

function elementHasAttr(selector, attr, AttrVal) {
  if (!AttrVal) {
    return document.querySelector(selector).getAttribute(attr);
  }

  return document.querySelector(selector).getAttribute(attr).indexOf(AttrVal) !== -1;
}

function elementFound(selector) {
  return document.querySelectorAll(selector).length;
}