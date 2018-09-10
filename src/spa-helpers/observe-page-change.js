import updateCalendar from '../outlook/render-calendar';

/**
 * observeCalendarViewChange - Listens for when user changes cal-view from any
 * date change (present & future times), Day/WorkWeek/Week/Month, switching views
 * from eMail to calendar, etc.
 *
 * @return {undefined}
 */
export default function observePageChange() {
  const target = document.querySelector('._wx_f > div:nth-child(2)');
  const config = { attributes: true };
  const observer = new MutationObserver((mutations) => {
    // console.log('mutations: ', mutations);
    if (isOfficeCalendar()) {
        observer.disconnect();
        updateCalendar();
        observer.observe(target, config);
      }
  });
  
  if (document.readyState === 'complete' && isOfficeCalendar()) updateCalendar();
  observer.observe(target, config);
}

function isOfficeCalendar(location = window.location) {
  return location.search.indexOf('path=/calendar') !== -1
}