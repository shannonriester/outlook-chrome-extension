// const workWeekMap = {
//   getCurrentDay: 0,
//   getCurrentTime: function() {
//     return new Date();
//   },
//   dayIndexMap: {
//     monday: 1,
//     tuesday: 2,
//     wednesday: 3,
//     thursday: 4,
//     friday: 5,
//     saturday: 6,
//     sunday: 7,
//   },
//   isOldDay: function(elmDay) {

//   },
//   markOldDay: function(elm) {
//     elm.classList.add('old-day');
//   },
//   getLeftPxNum: function(elm) {
//     const left = $(elm).css('left');
//     if (left && left.indexOf('px') !== -1)
//       return Number(left.replace('px', ''));
//   },
//   determineNodeDay: function(node) {
//     const left = this.getLeftPxNum(node);
//     if (left === workWeekMap.monday.isMondayApt(node)) return 'monday';
//     if (left <= workWeekMap.tuesday.isTuesdayApt(node)) return 'tuesday';
//     if (left <= workWeekMap.wednesday.isWednesdayApt(node)) return 'wednesday';
//   },
//   monday: {
//     memoized: {},
//     node: function() {
//       if (this.memoized.node) return this.memoized.node;
//       const mondayNode = document.querySelector('._cb_k2 > :nth-child(1)');
//       this.memoized.node = mondayNode;
//       return mondayNode;
//     },
//     leftCss: function(leftNum) {
//       if (this.memoized.leftCss) return this.memoized.leftCss;
//       // 67px is the max-left value
//       const mondayLeft = (0 || 67);
//       this.memoized.leftCss = mondayLeft;
//       return mondayLeft;
//     },
//     isMondayApt: function(elm) {
//       const elmLeft = workWeekMap.getLeftPxNum(elm);
//       if (elmLeft === 0 || elmLeft <= this.leftCss) {
//         this.appointments.push(elm);
//         return true;
//       }
//     },
//     appointments: [],
//   },
//   tuesday: {
//     memoized: {},
//     node: function() {
//       if (this.memoized.node) return this.memoized.node;
//       const tuesdayNode = document.querySelector('._cb_k2 > :nth-child(2)');
//       this.memoized.node = tuesdayNode;
//       return tuesdayNode;
//     },
//     leftCss: function() {
//       if (this.memoized.leftCss) {
//         return workWeekMap.getLeftPxNum(this.node);
//       }
//       const left = workWeekMap.getLeftPxNum(this.node);
//       this.memoized.leftCss = left;
//       return left;
//     },
//     isTuesdayApt: function(elm) {
//       const elmLeft = workWeekMap.getLeftPxNum(elm);
//       if (elmLeft < this.leftCss) {
//         this.appointments.push(elm);
//         return true;
//       }
//     },
//     appointments: [],
//   },
//   wednesday: {
//     memoized: {},
//     node: function() {
//       if (this.memoized.node) return this.memoized.node;
//       const wednesdayNode = document.querySelector('._cb_k2 > :nth-child(3)');
//       this.memoized.node = wednesdayNode;
//       return wednesdayNode;
//     },
//     leftCss: function() {
//       if (this.memoized.leftCss) {
//         return workWeekMap.getLeftPxNum(this.node);
//       }
//       const left = workWeekMap.getLeftPxNum(this.node);
//       this.memoized.leftCss = left;
//       return left;
//     },
//     isWednesdayApt: function(elm) {
//       const elmLeft = workWeekMap.getLeftPxNum(elm);

//       if (elmLeft < this.leftCss) {
//         this.appointments.push(elm);
//         return true;
//       }
//     },
//     appointments: [],
//   },
// };

// export default workWeekMap;
