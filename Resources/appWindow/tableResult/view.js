var headerTableView 	= Ti.UI.createView({id:"headerTableView"});
var footerTableView 	= Ti.UI.createView({id:"footerTableView"});


var headerTableLabel 	= forms.label("loading Data","headerTableLabel","")
var footerTableLabel 	= forms.label("loading Data","footerTableLabel","")

headerTableView.add(headerTableLabel);
footerTableView.add(footerTableLabel);

var tableView = Titanium.UI.createTableView({
	data:[],
	headerView:headerTableView,
	footerView:footerTableView
});

tableView.addEventListener("scrollEnd", function (e) {
	consoleEcho(e.contentOffset.y);
});