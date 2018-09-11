// export default function ajaxRequest(callback) {
//   const origOpen = XMLHttpRequest.prototype.open;
//   XMLHttpRequest.prototype.open = function (e) {
//     console.log('opened xml req: ', e);
//     // Add an event listener for the completed call
//     this.addEventListener('load', function (e) {
//       console.log('this.readyState: ', this.readyState);
//       console.log('e.target.responseText: ', e.target.responseText);
//       if (e.target &&
//         e.target.responseText &&
//         e.target.responseText.indexOf('CalendarItem:#Exchange') !== -1) {
//           console.log('response text passed!');
//           callback();
//       }
//     });

//     origOpen.apply(this, arguments);
//   };
//   // return new Promise(function(resolve, reject) {
//   //   const send = XMLHttpRequest.prototype.send
//   //   XMLHttpRequest.prototype.send = function() {
//   //     this.addEventListener('load', function(evt) {
//   //       return new Promise((resolve1, reject2) => {
//   //         console.log('evt: ', evt);
//   //         // these statements don't work well with the ASYNC problem but oh well...
//   //         if (this.responseText.indexOf('CalendarItem:#Exchange') !== -1) {
//   //           resolve(this.responseText);
//   //           callback();
//   //           resolve1(this.responseText);
//   //         }
//   //       });
//   //     });

//   //     send.apply(this, arguments);
//   //   }
//   // }).then(function(args) {
//   //   console.log('args: ', args);
//   //   console.log('resolving!!!!');
//   //   callback();

//   //   console.log('SUCCESS!');
//   // }).done(function() {

//   // });
// }