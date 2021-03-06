import getParam from '../utils/get-param.js';

class Outlook {
  constructor() {
    this.meetingSelector = '._wx_m1';
    this.dayColSelector = '._wx_u1';
    this.daySelector = this.GetDaySelector();
    this.weekView = this.WeekView();
    this.firstDay = this.FirstDay();
    // this.weekDayLayout = this.WeekDayLayout();
    this.weekMap = this.GetWeekMap();
    this.today = this.Today();
    this.markConcurrentAppointments = this.MarkConcurrentAppointments();
    this.start = this.Start();
  }

  Start() {
    this.GetDaySelector();
    this.WeekView();
    this.Today();
    this.FirstDay();
    this.GetWeekMap();
  }

  GetDaySelector() {
    if (this.daySelector) return this.daySelector;
    const dayParam = getParam('path');
    if (dayParam === '/calendar/view/Week') {
      this.daySelector = '._cb_h2';
      return '._cb_h2';
    } else if (dayParam === '/calendar/view/WorkWeek') {
      this.daySelector = '._cb_l2';
      return '._cb_l2';
    }
  }

  // Determines & marks today's column, today's heading-day
  Today() {
    const $today = $('.ms-font-color-themePrimary ._cb_i1').closest(this.daySelector).addClass('today');
    console.log('$today: ', $today);
    if ($today.length) {
      const todayName = $today.text().trim().toLowerCase().match(/(?!\d+ ).+/)[0];
      const rowLeft = this.getLeftPx($today[0]);
      const firstRowLeft = this.getLeftPx($(`${this.dayColSelector}:first`));
  
      $(`${this.dayColSelector}[style*=" ${rowLeft + firstRowLeft}px"]`).addClass('today-column');
      $('._wx_q1').addClass(`active-day--${todayName.trim()}`).removeClass('inactive-days--old');
    } else {
      const dateText = $('#_ariaId_27').text(); 
      const year = dateText.match(/, 20\d+/)[0].replace(', ', '');
      const dateRange = dateText.split('–')[0].trim();
      const today = new Date();
       
      if (new Date(`${dateRange}, ${year}`) >= today) {
        $('._wx_q1').removeClass('inactive-days--old');
      } else {
        $('._wx_q1').addClass('inactive-days--old');
      }
    }
  }

  FirstDay() {
    if (this.firstDay) return this.firstDay;
    const weekDays = document.querySelectorAll('._cb_i1');
    if (weekDays && weekDays[0]) {
      this.firstDay = weekDays[0];
      this.MarkDays(weekDays);
      return weekDays[0];
    }
  }

  MarkDays(days) {
    for (let index = 0; index < days.length; index++) {
      const day = days[index];
      const name = day.innerText.match(/(?!\d+ ).+/);
      if (name && name[0]) {
        const today = name[0].trim().toLowerCase();
        $(day).closest(this.daySelector).addClass(today);
      }
    }
  }

  WeekView() {
    if (this.weekView) return this.weekView;

    const calWeekLength = document.querySelectorAll('._cb_i1').length;
    if (calWeekLength === 5) {
      const workWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
      this.weekView = workWeek;
      return workWeek;

    } else if (calWeekLength === 7) {
      const fullWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      this.weekView = fullWeek;
      return fullWeek;
    }
  }

  WeekDayLayout() {
    const weekDays = this.weekView;
    const calWeekLength = document.querySelectorAll('._cb_i1').length;

    if (!!this.firstDay) {
      if (this.firstDay !== 'monday' || this.firstDay !== 'sunday') {
        const cutFrom = weekDays.indexOf(this.firstDay);
        const beginningLayout = weekDays.slice(cutFrom);
        const endLayout = weekDays.slice(0, cutFrom);
        return beginningLayout.concat(endLayout).flat().slice(0, calWeekLength);
      } else {
        return this.weekView;
      }
    } else if (!this.firstDay) {
      return weekDays.slice(0, calWeekLength);
    }
  }

  GetWeekMap() {
    const weekMap = new Map();
    this.weekView.map((day) => {
      const left = this.getLeftPx(`.${day}.${this.daySelector}`);
      const $apptDays = $(`${this.meetingSelector}[style*="left: ${left}px"]`);

      weekMap.set(day, left);
      weekMap.set('meetings', $apptDays);
      $apptDays.addClass(`${day} updated-day`);
    });

    this.weekMap = weekMap;

    const $notYetUpdated = $(`${this.meetingSelector}:not(.updated-day)`);
    if ($notYetUpdated.length) {
      $notYetUpdated.each((i, notYetUpdated) => {
        this.MarkConcurrentAppointments($(notYetUpdated));
      });
    }
  }

  MarkConcurrentAppointments($meeting) {
    if ($meeting && $meeting.length && $meeting.next(`.updated-day`).length) {
      if (!$meeting.hasClass('updated-day')) {
        const nextDay = $meeting.next(`.updated-day`)[0].classList[1];
        $meeting.addClass(`${nextDay} updated-day`);
      }
    } else if ($meeting && $meeting.length && $meeting.prev(`.updated-day`).length) {
      if (!$meeting.hasClass('updated-day')) {
        const prevDay = $meeting.prev(`.updated-day`)[0].classList[1];
        $meeting.addClass(`${prevDay} updated-day`);
      }
    }
  }

  getLeftPx(element) {
    const left = $(element).css('left');
    if (left && left.indexOf('px') !== -1) {
      return Number(left.replace('px', ''));
    }
  }
}

export default Outlook;