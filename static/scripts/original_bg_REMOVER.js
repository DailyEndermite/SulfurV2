// Made by ModdedStuffGuy
var LocalStorageName = "stylepallet";
if (jsCookie.get("stylepallet") == "background/url(./img/bg/default.jpg);sidebarcolor1/#11101d;sidebarcolor2/#fff;textcolor/#fff;") {
    var LocalStorageTXT = "background/url(./img/bg/default.jpg);sidebarcolor1/#11101d;sidebarcolor2/#fff;textcolor/#fff;;";
    localStorage[LocalStorageName] = LocalStorageTXT;
}
else {
    var url = jsCookie.get("bg");
    var LocalStorageTXT = "background/url("+url");sidebarcolor1/#11101d;sidebarcolor2/#fff;textcolor/#fff";
}
