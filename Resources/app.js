Titanium.include("config/config.js");
var wLoginWin = Titanium.UI.createWindow({
	exitOnClose: false,
	fullscreen: true,
	backgroundImage:"default.png",
	navBarHidden: true,
	url: "login.js",
	layout:"vertical"
});
wLoginWin.open();

