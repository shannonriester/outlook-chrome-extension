// import app from './dist/main.js';
// Listen for messages from pop.js to get the current tab URL and clear cookies from that domain
chrome.runtime.onActiveTab.addListener(function(request, sender, sendResponse) {
  var url = request.message;
  console.log('request.message: ', request.message);
  if (url.indexOf('path=/calendar') !== -1) {
    // app();
    // Let the popup.js script know that calendar has been updated.
    chrome.runtime.sendMessage({
      message: 'NOC\'d cal!',
    }, function (response) {
      // app();
    });
  }
});