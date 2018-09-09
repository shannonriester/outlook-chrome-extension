Author: Shannon Riester

Notes: do

```js
// will need to be parsed to get the current date...
const currentDate = document.querySelector('#_ariaId_27');

// the left positioning for each child, '._cb_l2', indicates what the other days are...
const weekDaysContainer = document.querySelector('._cb_k2');

const monday = $(weekDaysContainer).find('> div:nth-child(1)');
const tuesday = $(weekDaysContainer).find('> div:nth-child(2)');
const wednesday = $(weekDaysContainer).find('> div:nth-child(3)');
const thursday = $(weekDaysContainer).find('> div:nth-child(4)');
const friday = $(weekDaysContainer).find('> div:nth-child(4)');

const tuesdayLeft = $(weekDaysContainer).find('> div:nth-child(2)').css('left');
// const mondayLeft =
// const $tuesdays =

const weekdayAppts = document.querySelector('._wx_m1');

$('._cb_2')
```
