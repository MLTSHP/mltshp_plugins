var mltshp = {

    mltshpurl: "https://mltshp.com/tools/p?url=",

    init: function() {
        window.removeEventListener("load", mltshp.init, false);
        document.getElementById("contentAreaContextMenu").addEventListener("popupshowing", mltshp.Context, false);
    },

    Context: function() {
        var menuitem1;
        menuitem1 = document.getElementById("mltshp-imagen");
        menuitem1.hidden = !gContextMenu.onImage;
    },
    subir: function() {
        var image_url, source_query, path_array, source_url;
        image_url = gContextMenu.imageURL;
        source_query = "";

        source_url = getBrowser().contentWindow.location.href;

        if (source_url == image_url) {
            path_array = source_url.split('/');
            source_url = path_array[0] + "//" + path_array[2];
        }

        if (source_url) {
            source_query = "&source_url=" + encodeURIComponent(source_url);
        }

        window.open(mltshp.mltshpurl + encodeURIComponent(image_url) + source_query, "Save an image.", "toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes");
    },
};

window.addEventListener("load", mltshp.init, false);