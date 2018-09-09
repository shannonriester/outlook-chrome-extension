import {
  hours24,
  timeIncrements,
} from '../outlook/time-maps.js';

const dayIndx = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

const dayNumMap = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
};

const monthsIndx = {
  january: 0,
  february: 1,
  march: 2,
  april: 3, 
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

function calcDaysFromToday(daysFrom) {
  const today = new Date();
  const later = today.setDate(today.getDate() + daysFrom);
  const xDaysFromToday = new Date(later);

  return xDaysFromToday;
}

function calcHoursFromNow(hoursFrom) {
  const now = new Date();
  const later = now.setHours(now.getHours() + hoursFrom);
  const xHoursFromToday = new Date(later).getHours();

  return xHoursFromToday;
}

function getDateFromToday(daysFrom) {
  const xDaysFromNow = calcDaysFromToday(daysFrom);
  const day = xDaysFromNow.getDate();
  const year = xDaysFromNow.getFullYear();
  // retrieve long-month name (i.e. "December" instead of "Dec")
  const month = xDaysFromNow.toLocaleString('en-us', { month: 'long' });

  return {
    month,
    day,
    year,
  };
}

// considers anything before the current appointment 
/**
 * @param  {} $calDay
 * @param  {} top
 * @example - if it's 1:34pm and $calDay is from 1pm to 1:30pm, then return true; if $calDay
 * is from 1pm to 2pm, return false.
 * 
 * Appointment durations are calculated by $calDay's height, as increments of 24px.
 * 
 * OUTLOOK HR INCREMENTS...
 * 1 hour ~ 53px
 * 1/2 hour ~ 26px
 *  
 */
function isOldAppointment($calDay, day, top) {
  const now = new Date();
  // const hour = now.getHours();

  if (now.getDay() === dayIndx[day]) {
    if (top <= hours24[now.getHours()].topNum) {
      let aptDuration = $calDay.height();
      aptDuration = aptDuration % 26 > 0 ? aptDuration / 53 : 0.5;
      console.log('aptDuration: ', aptDuration);
      console.log('now.getHours(): ', now.getHours());
      console.log('calcHoursFromNow(aptDuration): ', calcHoursFromNow(aptDuration));
      console.log('top: ', top);
      if (top < top + $calDay.height()) return true;
      if (now.getHours() < calcHoursFromNow(aptDuration)) {
        return true;
      }
    }
  }

  return false;
  // const minutes = now.getHours();
  // const meetingDate = new Date(meetingDay);
  // return meetingDate.valueOf() >= now.valueOf();
}

// only up to the current day is considered...
function isOutdated(year, month, day) {
  const now = new Date();
  const calView = new Date(`${month} ${day}, ${year}`);
  return Date.parse(calView) < Date.parse(now);
  // console.log('Number(day) < now.getDay(): ', Number(day) < now.getDay());

  // if (Number(year) < now.getFullYear()) return true;
  // if (typeof month === 'string' && month.length > 2) {
  //   if (monthsIndx[month.toLowerCase()] < now.getUTCMonth()) return true;
  // } else if(Number(month) < now.getUTCMonth()) return true;

  // if (typeof day === 'string' && day.length > 2) {
  //   if (dayIndx[month.toLowerCase()] < now.getUTCMonth()) return true;
  // } else if (Number(day) < now.getDay()) return true;

  // return false;
}

export {
  getDateFromToday,
  isOutdated,
  isOldAppointment,
  dayNumMap,
};