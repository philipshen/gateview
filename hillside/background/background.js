// FIXME: hack, asynchronous stuff might screw us
var inGateviewRequest = false;
var currentGateviewCookie;

chrome.webRequest.onBeforeSendHeaders.addListener(
  data => {
    const { requestHeaders, initiator } = data;
    // debugger;
    if (!inGateviewRequest) {
      return { requestHeaders };
    }
    for (const i in requestHeaders) {
      if (requestHeaders[i].name.toLowerCase() === "cookie") {
        console.log(currentGateviewCookie);
        console.log("AYAYAYAYAAYh");
        requestHeaders[i].value = "_twitter_sess=" + currentGateviewCookie;
        inGateviewRequest = false;
        currentGateviewCookie = null;
        console.log(requestHeaders[i].value);
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
  if (request.action === "twitter-login") {
    // Send request to server
    const xhr = new XMLHttpRequest(),
      method = "POST",
      url = "https://gateview.dev:5000/spike/1";

    xhr.open(method, url, true);
    xhr.onreadystatechange = function() {
      // In local files, status is 0 upon success in Mozilla Firefox
      if (xhr.readyState === XMLHttpRequest.DONE) {
        var status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          // The request has been completed successfully

          currentGateviewCookie = JSON.parse(xhr.responseText)["_twitter_sess"];
          inGateviewRequest = true;
          chrome.tabs.create({ url: "https://www.twitter.com/home" });
        } else {
          // Oh no! There has been an error with the request!
          // chrome.tabs.create({ url: "https://www.twitter.com/home" });
        }
      }
    };
    xhr.send();

    // Have server render some json

    // Have server do the twitter login with Mechanize
    // Return session cookies to the client
    // Client injest the cookies and creates the new tab
    // Encrypt using the firebase auth token?
    // Store session cookies on the backend?
    // chrome.tabs.create({ url: "https://www.twitter.com/home" });
  }
});
