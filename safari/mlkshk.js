window.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event)
{
    // Check if the target has an image link and set to user info attribute
    url = event.target.src;
    if(url != null)
    {
        var userInfo = {
            name: event.target.nodeName,
            url: event.target.src,
        }
        safari.self.tab.setContextMenuEventUserInfo(event, userInfo);
    } else {
        safari.self.tab.setContextMenuEventUserInfo(event, "");
    }
}