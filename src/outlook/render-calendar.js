import {
  workWeek,
  week,
  month,
} from './date-maps';
import {
  isOldAppointment,
  isOutdated,
  dayNumMap,
} from '../date-logic/date-math';

const dayClass = '_wx_m1';

function updateCalendar() {
  const { year, month, endDay } = getOutlookDateRange();
  if (!isOutdated(year, month, endDay)) {
    $('body').addClass(`current-date-range ${dayNumMap[new Date().getDay()]}`);
    const calView = getCalendarView();
    markDays(calView);
  } else {
    $(`.${dayClass}`).addClass('old-day');
    $('body').removeClass('current-date-range');
  }
}

function wasCanceled(meeting) {
  return meeting.indexOf('Cancel') !== -1;
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

function markDays(calView) {
  return calView.map((day) => {
    const left = getPositionPx($(day.target));
    day.left = left;
    const $calDay = $(`._wx_m1[style*="left: ${left}px"]`);
    if ($calDay.length) {
      $calDay.addClass(`${day.day} updated-day`);
      markConcurrentApts($calDay, day.day);
      
      if (isOldAppointment($calDay, day.day, getPositionPx($calDay, 'top'))) {
        $calDay.addClass('old-day');
      }
    }
  });
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
  const fullDate = $('._wx_v').text().split(',');
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

function isOfficeCalendar(location = window.location) {
  return location.search.indexOf('path=/calendar') !== -1
}

export {
  isOfficeCalendar,
  updateCalendar,
};

// render cal view
// generate cal view
// determine
