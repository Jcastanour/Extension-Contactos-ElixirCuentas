chrome.runtime.onInstalled.addListener(() => {
  console.log("WhatsApp Contact Extension Installed");
});

chrome.commands.onCommand.addListener((command, tab) => {
  if (!tab || !tab.id) return;

  if (command === "copiar-numero-auto") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["copynumber.js"],
    });
  }

  if (command === "abrir-contactos-auto") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
  }
});
