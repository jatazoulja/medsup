Titanium.include("../../config/config.js");
Titanium.include("../../libs/library.js");

var winSearhList = Titanium.UI.createWindow({
	title:'Search Form',
	backgroundImage:"default.png",
	fullscreen: true,
	navBarHidden: true
});

var headerView = forms.label("This is the Header",'headerView',"labelText");
var footerView = forms.label("This Is The Footer",'footerView',"labelText");

// create FormElements;
var data=[];
var row = Titanium.UI.createTableViewRow({className :'rowFormSearch'});
var zipLabel 		= forms.label("Zip Code",'zipLabel',"formLabelText");
var ageLabel 		= forms.label("Zip Code",'ageLabel',"formLabelText");
var zipTextBox		= forms.text("00000","zipTextBox","formTextBox");
var ageTextBox		= forms.text("00", "ageTextBox","formTextBox");

var zipView  		= Titanium.UI.createView({id:"zipView",className:"formSearchView"});
var ageiew  		= Titanium.UI.createView({id:"zipView",className:"formSearchView"});

genAdd(zipView, [zipLabel,zipTextBox]);
genAdd(ageiew, [ageLabel,ageTextBox]);
row[0].add(zipView);
row[1].add(ageView);
data.push(row);

var tableView = Titanium.UI.createTableView({
	data:[],
	headerView:headerView,
	footerView:footerView,
	id:"searchForm",
	className:"tableView",
});



// var optZip 		= forms.label("Zip Code",'zipCode',"labelText");

winSearhList.add(optZip);
winSearhList.open();