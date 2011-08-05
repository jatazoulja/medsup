Titanium.include("../../config/config.js");
Titanium.include("../../libs/library.js");

var winSearhList = Titanium.UI.createWindow({
	title:'Search Form',
	backgroundImage:"default.png",
	fullscreen: true,
	navBarHidden: true
});

var headerView = forms.label("This is the Header",'zipCode',"labelText");
var footerView = forms.label("This Is The Footer",'zipCode',"labelText");


var tableView = Titanium.UI.createTableView({
	data:[],
	headerView:headerView,
	footerView:footerView
});



var optZip 		= forms.label("Zip Code",'zipCode',"labelText");

winSearhList.add(optZip);
winSearhList.open();
