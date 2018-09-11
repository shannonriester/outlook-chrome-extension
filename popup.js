// Get URL of selected tab and send it to the background.js file
chrome.tabs.getSelected(null,function(tab) {
  var tablink = tab.url;
  console.log('tablink: ', tablink);
  chrome.runtime.sendMessage({ message: tab.url }, function(response) {});
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'NOC\'d cal') {
    console.log('chrome.runtime.onMessage.addListener');
  }
});