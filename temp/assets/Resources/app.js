Titanium.include("settings.js");
var wLoginWin = Titanium.UI.createWindow({
	exitOnClose: false,
	fullscreen: true,
	backgroundImage:"default.png",
	navBarHidden: true,
	url: "login.js"
});
wLoginWin.open();

var pb=Titanium.UI.createProgressBar({
    width:250,
    min:0,
    max:10,
    value:0,
    color:'#fff',
    message:'Downloading 0 of 10',
    font:{fontSize:14, fontWeight:'bold'},
    style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
}).show();

