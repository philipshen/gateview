chrome.webRequest.onBeforeSendHeaders.addListener(data => {
  const { requestHeaders } = data
  for (const i in requestHeaders) {
    if (requestHeaders[i].name.toLowerCase() === 'referer') {
      requestHeaders[i].value = 'POOP'
    }
  }
  return { requestHeaders }
}, {
  urls: ["<all_urls>"],
  types: ["xmlhttprequest"]
}, [
  "requestHeaders",
  "blocking",
  "extraHeaders"
])