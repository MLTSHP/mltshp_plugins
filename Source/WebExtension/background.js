/**                                                                                
 * Returns a handler which will open a new window when activated.                  
 */
function getClickHandler() {
    return function(info, tab) {
        source_url = tab.url
        if (source_url == info.srcUrl) {
            path_array = source_url.split('/');
            source_url = path_array[0] + "//" + path_array[2];
        }
        chrome.windows.create({
            "url": "http://new.mltshp.com/tools/p?url=" + escape(info.srcUrl) + "&source_url=" + escape(source_url),
            "type": 'popup',
            "height": 650,
            "width": 850,
            "top": (screen.height / 2) - (650 / 2),
            "left": (screen.width / 2) - (850 / 2)
        });

    };
};
/**                                                                                
 * Create a context menu which will only show up for images.                       
 */
chrome.contextMenus.create({
    "title": "Save this image on MLTSHP",
    "type": "normal",
    "contexts": ["image"],
    "onclick": getClickHandler()
});