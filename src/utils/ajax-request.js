export default function ajaxRequest(callback, handler = handleLoad) {
  const send = XMLHttpRequest.prototype.send;
  
  XMLHttpRequest.prototype.send = function() {
    const ajaxReq = this;
    ajaxReq.addEventListener('load', handler);
    send.apply(ajaxReq, arguments.bind(null, ajaxReq, callback, handler));
  }
}

function handleLoad(ajaxReq, callback, handler, evt) {
  if (evt.target.responseText.indexOf('CalendarItem:#Exchange') !== -1) {
    if (document.querySelectorAll('._wx_f').length && document.querySelectorAll('._wx_v').length) {
      ajaxReq.removeEventListener('load', handler);
      callback();
    }
  }
}