
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("------------------------");
        console.log(details.url);
        console.log(details.type);
        console.log("------------------------");
    },
    {urls: ["<all_urls>"]},
    []
);