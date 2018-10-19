import getParam from '../utils/get-param.js';

class Outlook {
  constructor() {
    this.daySelector = this.GetDaySelector();
    this.weekView = this.WeekView();
    this.firstDay = this.FirstDay();
    // this.weekDayLayout = this.WeekDayLayout();
    this.weekMap = this.GetWeekMap();
    this.today = this.Today();
    this.instantiate = this.Instantiate();
  }

  Instantiate() {
    this.GetDaySelector();
    this.WeekView();
    this.FirstDay();
    this.GetWeekMap();
    this.Today();
    // this.WeekDayLayout();
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

  Today() {
    $('.ms-font-color-themePrimary ._cb_i1').closest(this.daySelector).addClass('today');
    return $('.ms-font-color-themePrimary ._cb_i1:visible');
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
        $(day).closest(this.daySelector).addClass(name[0].trim().toLowerCase());
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
      weekMap.set(day, this.getLeftPx(`.${day}.${this.daySelector}`));
    });
    this.weekMap = weekMap;
  }

  getLeftPx(element) {
    const left = $(element).css('left');
    if (left && left.indexOf('px') !== -1) {
      return Number(left.replace('px', ''));
    }
  }
}

export default Outlook;