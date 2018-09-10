import {
  workWeek,
  week,
  month,
} from './outlook-date-maps';
import {
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
  const { year, month, endDay, startDay } = getOutlookDateRange();
  // console.log('year: ', year);
  // console.log('month: ', month);
  console.log('endDay: ', endDay);
  console.log('!isOutdated(month, startDay, year): ', !isOutdated(month, endDay, year));
  // console.log('!isOutdated(month, startDay, year): ', !isOutdated(month, endDay, year));
  // if it's between the start and end of the current week...
  if (!isOutdated(month, endDay, year)) {
    $body.addClass(`current-date-range ${dayNumMap[new Date().getDay()]}`);
    getCalendarView().map(markDays);
  } else {
    console.log('REMOVING CURRENT DATE RANGE!!!', $(`.${dayClass}`));
    $(`.${dayClass}`).addClass('old-day');
    $body.removeClass('current-date-range');
  }
}

function markDays(day) {
  const left = getPositionPx($(day.target));
  const $meeting = $(`.${dayClass}[style*="left: ${left}px"]`);

  if ($meeting.length) {
    $meeting.addClass(`${day.day} updated-day`);
    markConcurrentApts($meeting, day.day);
    
    if ($('body').hasClass('current-date-range') && isOldAppointment($meeting, day.day, getPositionPx($meeting, 'top'))) {
      $meeting.addClass('old-day');
      // MUST evaluate if in current week-view before evaluating if $meeting is today...
      if (new Date(day.day)) {
        $(`.${dayColClass}[style*="left: ${left}px"]`).addClass('today-column');
      } else {
        $('.today-column').removeClass('today-column');
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

function getPositionPx($elm, position = 'left') {
  const pxVal = $elm.css(position).replace('px', '');
  if (pxVal) return Number(pxVal);
}

function markConcurrentApts($meeting, day) {
  if ($meeting.next('.wx-m1:not(.updated-day)').length) {
    $meeting.addClass(`${day} updated-day`);
    markConcurrentApts($meeting, day);
  }
}

function getCalendarView(search = window.location.search) {
  if (search.indexOf('WorkWeek') !== -1) {
    return workWeek;
  } else if (search.indexOf('Week') !== -1) {
    return week;
  } else if (search.indexOf('Month') !== -1) {
    return month;
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
