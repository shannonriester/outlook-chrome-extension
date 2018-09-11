import { getCalendarView } from './outlook-date-maps';
import {
  isActiveAppointment,
  isOldAppointment,
  isOutdated,
  isToday,
} from '../date-logic/date-math';
import {
  dayNumMap,
  dayIndx,
} from '../date-logic/date-maps';
const dayClass = '_wx_m1';
// const dayColClass = '_wx_u1';

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
    getCalendarView().targetList.map(markDays);
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
  const left = getCssPx($(dateView.target), 'left');
  const $meeting = $(`.${dayClass}[style*="left: ${left}px"]`);
  
  // ALL CALENDAR MEETINGS
  if ($meeting.length) {
    if ($('body').hasClass('current-date-range')) {
      // OLD/ACTIVE/FUTURE MEETINGS (must iterate to get each meetings' time).
      $meeting.each((i, meeting) => handleTodaysApts($(meeting), dateView));
      
      // MARK TODAY'S COLUMN.
      if (isToday(dateView.day)) {
        // console.log('dayIndx[dateView.day]: ', dayIndx[dateView.day]);
        console.log('getCalendarView().column[dateView.day]: ', getCalendarView().column[dateView.day]);
        $(getCalendarView().column[dateView.day]).addClass('active-meeting');
        // markTodaysColumn(dateView);
      }
    }

    // CONCURRENT MEETINGS
    // markConcurrentApts($meeting, dateView.day);

    // CANCELED MEETINGS
    handleCanceled($meeting);
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
function handleTodaysApts($meeting, dateView) {
  const day = dateView.day;
  const top = getCssPx($meeting, 'top');
  $meeting.addClass(`${day} updated-day`);

  if (isOldAppointment($meeting, day, top)) {
    $meeting.addClass('old-day');
    markConcurrentApts($meeting, dateView, 'old-day');

    // TODO: finish out this logic and make more efficient...
  } else if (isActiveAppointment($meeting, day, top)) {
    $meeting.addClass('active-meeting');
    // markConcurrentApts($meeting, dateView, 'active-meeting');
  }
}

function markTodaysColumn(dateView) {
  // console.log('dateView.day: ', dateView.day);
  // console.log('markTodaysColumn dateView-----: ', dateView);
  // const colLeft = getCssPx($(dateView.target), 'left');
  // console.log('colLeft: ', colLeft);
  // if (typeof colLeft === 'number') {
  //   const weekAdjustment = $('._cb_l2').is(':visible') ? 58 : 0;
  //   console.log('weekAdjustment: ', weekAdjustment);
  
  //   $(`.${dayColClass}[style*="left: ${colLeft + weekAdjustment}px"]`).addClass('today-column');
  //   // $(`.${dayColClass}[style*="left: ${colLeft + weekAdjustment}px"]`).addClass('today-column');
  // }
}

function markConcurrentApts($meeting, dateView, classMarker) {
  if ($meeting.width() < $(dateView.target).width()) {
    const meetingTabIndx = $meeting.attr('tabindex');
    if (meetingTabIndx && Number(meetingTabIndx)) {
      const $next = $(`.${dayClass}[tabindex${meetingTabIndx + 1}]`);
      const $prev = $(`.${dayClass}[tabindex${meetingTabIndx + 1}]`);
      if ($next.length) {
        $next.addClass(`${classMarker} ${dateView.day}`);
      } 
  
      if ($prev.length) {
        $prev.addClass(`${classMarker} ${dateView.day}`);
      }
    }
  }
}

function wasCanceled($meeting) {
  return $meeting.text().indexOf('Cancel') !== -1;
}

function handleCanceled($meeting) {
  if (wasCanceled($meeting)) {
    $meeting.addClass('was-canceled');
  } else if ($meeting.hasClass('was-canceled') && !wasCanceled($meeting)) {
    $meeting.removeClass('was-canceled');
  }
}

function getCssPx($elm, position = 'left') {
  const pxVal = $elm.css(position);

  if (pxVal && pxVal.indexOf('px') !== -1) {
    return Number(pxVal.replace('px', ''));
  }
}
