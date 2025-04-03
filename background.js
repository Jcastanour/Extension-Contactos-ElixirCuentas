chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        files: ['content.js', 'copyname.js', 'copynumber.js']
    });
});
