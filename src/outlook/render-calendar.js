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

// if meeting time is now or older
function handleTodaysApts($meeting, day) {
  const top = getCssPx($meeting, 'top');
  if (isOldAppointment($meeting, day, top)) {
    $meeting.addClass('old-day');
  
  // TODO: finish out this logic and make more efficient...
  } else if (isActiveAppointment($meeting, day, top)) {
    $meeting.addClass('active-meeting');
  }
}

function markDays(day) {
  const left = getCssPx($(day.target));
  const $meeting = $(`.${dayClass}[style*="left: ${left}px"]`);

  if ($meeting.length) {
    $meeting.addClass(`${day.day} updated-day`);
    markConcurrentApts($meeting, day.day);
    
    if ($('body').hasClass('current-date-range') && $meeting.length) {
      if ($meeting.length > 1) {
        $meeting.each((i, meeting) => handleTodaysApts($(meeting), day.day));
      } else {
        handleTodaysApts($meeting, day.day);
      }
      
      // MUST evaluate if in current week-view before evaluating if $meeting is today...
      if (isToday(day.day) && !$('.today-column').length) {
        const colLeft = getCssPx($(day.target).parent(), 'margin-left');
        $(`.${dayColClass}[style*="left: ${colLeft}px"]`).addClass('today-column');
      }
    }

    if (wasCanceled($meeting)) {
      $meeting.addClass('was-canceled');
    } else if ($meeting.hasClass('was-canceled')) {
      $meeting.removeClass('was-canceled');
    }
  }
}

function wasCanceled($meeting) {
  return $meeting.text().indexOf('Cancel') !== -1;
}

function getCssPx($elm, position = 'left') {
  const pxVal = $elm.css(position).replace('px', '');
  if (pxVal) return Number(pxVal);
}

function markConcurrentApts($meeting, day) {
  if ($meeting.next('.wx-m1:not(.updated-day)').length) {
    $meeting.addClass(`${day} updated-day`);
    markConcurrentApts($meeting, day);
  }
}

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

export {
  updateCalendar,
};
