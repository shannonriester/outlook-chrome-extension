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
  const today = dayNumMap[new Date().getDay()];
  console.log('today: ', today);

  if (!isOutdated(month, endDay, year)) {
    $body.addClass(`current-date-range ${today}`);
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
      $meeting.each((i, meeting) => labelAppointments($(meeting), dateView));
      
      // MARK TODAY'S COLUMN.
      if (isToday(dateView.day)) {
        $(getCalendarView().column[dateView.day]).addClass('today-column');
      }
    }

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
 * labelAppointments - Determines if meeting should be marked as old or active
 * depending on the current time and the meeting's time.
 * 
 * @param  {Object} $meeting - The calendar meeting.
 * @param  {Number} day - The weekday's index number.
 */
function labelAppointments($meeting, dateView) {
  const day = dateView.day;
  const top = getCssPx($meeting, 'top');
  $meeting.addClass(`${day} updated-day`);

  if (isOldAppointment($meeting, day, top)) {
    $meeting.addClass('old-day');
    // CONCURRENT OLD MEETINGS
    markConcurrentApts($meeting, dateView, 'old-day');

    // TODO: finish out this logic and make more efficient...
  } else if (isActiveAppointment($meeting, day, top)) {
    $meeting.addClass('active-meeting');
    // CONCURRENT ACTIVE MEETINGS
    markConcurrentApts($meeting, dateView, 'active-meeting');
  }
}

function markConcurrentApts($meeting, dateView, classMarker) {
  if ($meeting.width() < $(dateView.target).width()) {
    const meetingTabIndx = Number($meeting.attr('tabindex'));
    
    if ($meeting.prev('._wx_m1').length && !$meeting.prev('._wx_m1').hasClass('updated-day')) {
      const prevTabIndx = Number($meeting.prev('._wx_m1').attr('tabindex'));
      if (prevTabIndx + 1 === meetingTabIndx || prevTabIndx - 1 === meetingTabIndx) {
        $meeting.prev('._wx_m1').addClass(classMarker);
      }
    }

    if ($meeting.next('._wx_m1').length && !$meeting.next('._wx_m1').hasClass('updated-day')) {
      const prevTabIndx = Number($meeting.next('._wx_m1').attr('tabindex'));
      if (prevTabIndx + 1 === meetingTabIndx || prevTabIndx - 1 === meetingTabIndx) {
        $meeting.next('._wx_m1').addClass(classMarker);
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
