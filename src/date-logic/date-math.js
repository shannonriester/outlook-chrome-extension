import { hours24 } from '../outlook/outlook-date-maps.js';
import {
  dayIndx,
  dayNumMap,
  monthsIndx,
} from './date-maps.js';

/**
 * isToday - Determines if @compareDate is today.
 * 
 * @param  {Number} compareDate
 * 
 * @return {Boolean}
 */
function isToday(compareDate) {
  const now = new Date();
  return (now.getDay() === dayIndx[compareDate]);
}

// considers anything before the current appointment 
/**
 * @param  {Object.<jQuery node>} $calDay - The appointment-node being evaluated.
 * @param  {String} day - Today's day (i.e: monday, tuesday, thursday, wednesday).
 * @param  {Number} top - $calDay's top-position.
 * @return {Boolean}
 *
 * @example - if it's 1:34pm and $calDay is from 1pm to 1:30pm, then return true; if $calDay
 * is from 1pm to 2pm, return false. Outlook calendar appointments/meetings are evaluated based off of their
 * heights: 1hr ~ 53px; 0.5hr ~ 26px; 
 *  
 */
function isOldAppointment($calDay, day, top) {
  const now = new Date();
  if (now.getDay() === dayIndx[day]) {
    // if appointment-time is AFTER the duration (top < top + $calDay.height()) of the appointment, it's old.
    return (top <= hours24[now.getHours()].topNum && (top < top + $calDay.height()));
  } else if (now.getDay() > dayIndx[day]) {
    return true;
  }

  return false;
}

function isActiveAppointment($calDay, day, top) {
  const now = new Date();
  if (now.getDay() === dayIndx[day]) {
    // if appointment-time is AFTER the duration (top < top + $calDay.height()) of the appointment, it's old.
    return (top <= hours24[now.getHours()].topNum && (top < top + $calDay.height()));
  }

  return false;
}

// only up to the current day is considered, not the time...
/**
 * isOutdated - Determines if the date submitted is older than the current date. This only
 * considers the Month/Day/Year, not the current time.
 * 
 * @param  {String} year - ex: "2018".
 * @param  {String} month - The month's name, not its index of the year.
 * @param  {String} day - The day's name, not its index of the week.
 * 
 * @return {Boolean}
 */
function isOutdated(month, day, year) {
  const now = new Date();
  
  if (Number(year) < now.getFullYear()) return true;

  if (typeof month === 'string' && month.length > 2) {
    if (monthsIndx[month.toLowerCase()] < now.getUTCMonth()) return true;
    } else if (Number(month) && month < now.getUTCMonth()) return true;

  if (typeof day === 'string' && day.length > 2) {
    console.log('dayIndx[month.toLowerCase()] < now.getDate(); ', dayIndx[month.toLowerCase()] < now.getDate());
    console.log('Number(day) < now.getDate(): ', Number(day) < now.getDate());
    if (dayIndx[month.toLowerCase()] < now.getDate()) return true;
  } else if (Number(day) < now.getDate()) return true;

  return false;
}

export {
  isActiveAppointment,
  isOutdated,
  isOldAppointment,
  isToday,
  dayNumMap,
};