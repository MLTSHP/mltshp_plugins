let clickedEl = null;

document.addEventListener("contextmenu", function (event) {
    clickedEl = event.target;
}, true);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request == "getAltText") {
        sendResponse({
            alt: clickedEl.getAttribute('alt') || ''
        });
    }
});
