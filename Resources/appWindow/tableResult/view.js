var headerTableView 	= Ti.UI.createView({id:"headerTableView"});
var footerTableView 	= Ti.UI.createView({id:"footerTableView", height:30, backgroundColor:"#fff"});
var	loadingIcon = Titanium.UI.createImageView({
			width:30,
			height:14,
			backgroundColor:"#fe0000",
			image:'/images/icons/more.gif',
			backgroundImage:'/images/icons/more.gif'
	});

var headerTableLabel 	= forms.label("loading Data","headerTableLabel","")

headerTableView.add(headerTableLabel);
footerTableView.add(loadingIcon);

var tableView = Titanium.UI.createTableView({
	data:[],
	headerView:headerTableView,
	footerView:footerTableView
});
