/**
 * Returns a handler which will open a new window when activated.
 */

const menuItemId = 'mltshpplgn'

const getClickHandler = (info, tab) => {

    source_url = tab.url
    if (source_url == info.srcUrl) {
        path_array = source_url.split('/');
        source_url = path_array[0] + "//" + path_array[2];
    }

    chrome.tabs.sendMessage(tab.id, "getAltText", { frameId: info.frameId }, data => {
        chrome.windows.create({
            "url": "https://mltshp.com/tools/p?url=" + encodeURIComponent(info.srcUrl) + "&source_url=" + encodeURIComponent(source_url) + '&alt=' + encodeURIComponent(data.alt),
            "type": 'popup',
            "height": 650,
            "width": 850,
        });
    });
};

/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
    "id": menuItemId,
    "title": "Save this image on MLTSHP",
    "type": "normal",
    "contexts": ["image"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === menuItemId) {
        getClickHandler(info, tab)
    }
});