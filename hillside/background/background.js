chrome.webRequest.onBeforeSendHeaders.addListener(
  data => {
    const { requestHeaders } = data;
    for (const i in requestHeaders) {
      if (requestHeaders[i].name.toLowerCase() === "cookie") {
        requestHeaders[i].value = "Sike bich";
      }
    }
    return { requestHeaders };
  },
  {
    urls: ["<all_urls>"]
    // types: ["xmlhttprequest"]
  },
  ["requestHeaders", "blocking", "extraHeaders"]
);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "Poop") {
    chrome.tabs.create({ url: "https://www.twitter.com/home" });
  }
});
