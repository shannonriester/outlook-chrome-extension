export default function ajaxRequest(callback) {
  return new Promise(function(resolve, reject) {
    const send = XMLHttpRequest.prototype.send
    XMLHttpRequest.prototype.send = function() {

      this.addEventListener('load', function(evt) {
        return new Promise((resolve1, reject2) => {
          console.log('evt: ', evt);
          // these statements don't work well with the ASYNC problem but oh well...
          if (this.responseText.indexOf('CalendarItem:#Exchange') !== -1) {
            callback(this.responseText);
            resolve(callback);
            resolve1(this.responseText);
          }
        });
      });

      send.apply(this, arguments);
    }
  }).then(function(args) {
    console.log('args: ', args);
    console.log('resolving!!!!');
    callback();

    console.log('SUCCESS!');
  }).done(function() {

  });
}