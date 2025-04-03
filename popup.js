document.addEventListener('DOMContentLoaded', function() {
  var abrirContacts = document.getElementById('abrirContacts');
  var copyName = document.getElementById('copyName');
  var copyNumber = document.getElementById('copyNumber');
  
  abrirContacts.addEventListener('click', function() {
    chrome.tabs.executeScript({
      file: 'content.js'
    });
  });

  copyName.addEventListener('click', function() {
    chrome.tabs.executeScript({
      file: 'copyname.js'
    });
  });

  copyNumber.addEventListener('click', function() {
    chrome.tabs.executeScript({
      file: 'copynumber.js'
    });
  });

});

