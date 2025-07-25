chrome.runtime.onInstalled.addListener(() => {
  // This will prompt the user to enter their API key on the first install
  chrome.storage.sync.get(["geminiApiKey"], (result) => {
    if (!result.geminiApiKey) {
      chrome.tabs.create({
        url: "options.html",
      });
    }
  });
});
