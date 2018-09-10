import { getCalendarView } from './outlook-date-maps';
import {
  isActiveAppointment,
  isOldAppointment,
  isOutdated,
  isToday,
} from '../date-logic/date-math';
import { dayNumMap } from '../date-logic/date-maps';
const dayClass = '_wx_m1';
const dayColClass = '_wx_u1';

/**
 * updateCalendar - Determine if/how to render each of the current calendar-view's
 * appointments (expired or not-expired).
 */
export default function updateCalendar() {
  const $body = $('body');
  const { year, month, endDay } = getOutlookDateRange();
  // if it's between the start and end of the current week...
  if (!isOutdated(month, endDay, year)) {
    $body.addClass(`current-date-range ${dayNumMap[new Date().getDay()]}`);
    getCalendarView().map(markDays);
  } else {
    $(`.${dayClass}`).addClass('old-day');
    $body.removeClass('current-date-range');
  }
}
/**
 * markDays - Iterates over the calendar-map (used to identify
 * to identify how to target the view 's elements in the DOM) in order to mark
 * old/active appointments/days.
 * 
 * @param  {Object} dateView - The map of the current calendar's view 
 */
function markDays(dateView) {
  const left = getCssPx($(dateView.target));
  const $meeting = $(`.${dayClass}[style*="left: ${left}px"]`);
  
  // ALL CALENDAR MEETINGS
  if ($meeting.length) {
    if ($('body').hasClass('current-date-range') && $meeting.length) {
      
      // OLD/ACTIVE MEETINGS (must iterate to get each meetings' time).
      $meeting.each((i, meeting) => handleTodaysApts($(meeting), dateView.day));
      
      // MARK TODAY'S COLUMN.
      if (isToday(dateView.day) && !$('.today-column').length) {
        const colLeft = getCssPx($(dateView.target).parent(), 'margin-left');
        $(`.${dayColClass}[style*="left: ${colLeft}px"]`).addClass('today-column');
      }
    }

    // CONCURRENT MEETINGS
    $meeting.addClass(`${dateView.day} updated-day`);
    markConcurrentApts($meeting, dateView.day);

    // CANCELED MEETINGS
    if (wasCanceled($meeting)) {
      $meeting.addClass('was-canceled');
    } else if ($meeting.hasClass('was-canceled') && !wasCanceled($meeting)) {
      $meeting.removeClass('was-canceled');
    }
  }
}
/**
 * getOutlookDateRange - Gets Outlook's current date view (workWeek, work, month, etc)
 * and deconstructs into more easily digestible / workable information.
 * 
 * @return {Object.<String>} - The current calendar's date-range. 
 * @return {Object}
 * 
 * @example: 
 * "September 8–9, 2018" returns => 
 *  {
 *    year: "2018", 
 *    month: "September", 
 *    startDay: "9",
 *    endDay: "15",
 *  };
 */
function getOutlookDateRange() {
  const $dateRante = $('._wx_v');
  if ($dateRante.length && $dateRante.text() && $dateRante.text().length) {
    const fullDate = $dateRante.text().split(',');
    const year = fullDate[1];
    const month = fullDate[0].split(' ')[0];

    const days = fullDate[0].split(' ')[1].split('–');
    const startDay = days[0];
    const endDay = days[1];

    return {
      year,
      month,
      startDay,
      endDay,
    };
  }
}

/**
 * handleTodaysApts - Determines if meeting should be marked as old or active
 * depending on the current time and the meeting's time.
 * 
 * @param  {Object} $meeting - The calendar meeting.
 * @param  {Number} day - The weekday's index number.
 */
function handleTodaysApts($meeting, day) {
  const top = getCssPx($meeting, 'top');
  if (isOldAppointment($meeting, day, top)) {
    $meeting.addClass('old-day');

    // TODO: finish out this logic and make more efficient...
  } else if (isActiveAppointment($meeting, day, top)) {
    $meeting.addClass('active-meeting');
  }
}

function markConcurrentApts($meeting, day) {
  if ($meeting.next('.wx-m1:not(.updated-day)').length) {
    $meeting.addClass(`${day} updated-day`);
    markConcurrentApts($meeting, day);
  }
}

function wasCanceled($meeting) {
  return $meeting.text().indexOf('Cancel') !== -1;
}

function getCssPx($elm, position = 'left') {
  const pxVal = $elm.css(position).replace('px', '');
  if (pxVal) return Number(pxVal);
}