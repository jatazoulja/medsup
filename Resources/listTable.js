Titanium.include("config/config.js");
Titanium.include("libs/library.js");

var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({
	title:'Search Form Window',
	backgroundImage:"default.png",
	fullscreen: true
});
var tab1 = Titanium.UI.createTab({
	title:'Search Form',
	window:win1
});

var win2 = Titanium.UI.createWindow({
	title:'Results Window',
	backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({
	title:'Results',
	window:win2
});
var scrollView = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true
});
var view = Ti.UI.createView({
	borderRadius:10,
	width:300,
	layout:'vertical',
	height:"auto",
	top:10
});

var optZip 		= forms.label("Zip Code",'zipCode',"labelText");
var optAge 		= forms.label("Age",'Age',"labelText");
var optMsplan 	= forms.label("MS Plan:",'msPlan',"labelText");
var optGender 	= forms.label("Gender",'gender',"labelText");
var optTobacco 	= forms.label("Tobacco",'Tobacco',"labelText");
var ioZip 		= forms.text("00000","inpZip","inputText");
var ioAge 		= forms.text("00","inpZip","inputText");
var ioTobacco	= forms.text("","inpZip","inputText");
var btnSubmitSearch	= forms.button("Search","btnSearch","button");

ioMsPlanData = [
	{title:'',custom_item:''},
	{title:'A',custom_item:'A'},
	{title:'C',custom_item:'C'},
	{title:'C*',custom_item:'C*'},
	{title:'D',custom_item:'D'},
	{title:'F',custom_item:'F'},
	{title:'F*',custom_item:'F*'},
	{title:'G',custom_item:'G'},
	{title:'HD',custom_item:'HD'},
	{title:'K',custom_item:'K'},
	{title:'L',custom_item:'L'},
	{title:'M',custom_item:'M'},
	{title:'N',custom_item:'N'}
]

var ioMsPlan = forms.selectOne({top:0},'selectMsPlan','selectOne',ioMsPlanData,false,2);
var ioMsPlanVal ='';
ioMsPlan.addEventListener('change', function(e) {
	ioMsPlanVal = e.row;
});

ioGenderData = [
	{title:'Male',custom_item:'M'},
	{title:'Female',custom_item:'F'},
	{title:'Don\'t Care',custom_item:'D'},
	{title:'Unknown',custom_item:'E'}
]
var ioGender = forms.selectOne({top:0},'selectGender','selectOne',ioGenderData,true,2);
var ioGenderVal='';
ioGender.addEventListener('change', function(e) {
	ioGenderVal = e.row;
});

ioTobaccoData = [
	{title:'Yes',custom_item:'Y'},
	{title:'No',custom_item:'N'},
	{title:'Don\'t Care',custom_item:'D'},
	{title:'Unknown',custom_item:'E'}
]
var ioTobacco = forms.selectOne({top:0},'selectTobaco','selectOne',ioTobaccoData,true,2);
var ioTobaccoVal='';
ioTobacco.addEventListener('change', function(e) {
	ioTobaccoVal = e.row;
});




var createView = [
	optZip,
	ioZip,
	optAge,
	ioAge,
	optMsplan,
	ioMsPlan,
	optGender,
	ioGender,
	optTobacco,
	ioTobacco,
	btnSubmitSearch
];

genAdd(view,createView);
scrollView.add(view);

var headerView = Ti.UI.createView({
	left:0,
	top:0,
	height:20
});

var headerLabel = Ti.UI.createLabel({
	left:0,
	top:0,
	width:'auto',
	text:'No data Available',
	color:'#232323',
	shadowColor:'black',
	shadowOffset: {
		x:0,
		y:1
	},
	font: {
		fontWeight:'bold',
		fontSize:10
	}
});
var footerView = Ti.UI.createView({
	left:0,
	top:0,
	height:60
});

var footerLabel = Ti.UI.createLabel({
	left:0,
	top:20,
	width:'auto',
	text:'No data Available',
	color:'#232323',
	shadowColor:'black',
	shadowOffset: {
		x:0,
		y:1
	},
	font: {
		fontWeight:'bold',
		fontSize:20
	}
});
footerView.add(footerLabel);
headerView.add(headerLabel);

var tableView = Titanium.UI.createTableView({
	data:[],
	headerView:headerView,
	footerView:footerView
});
tableView.addEventListener("scrollEnd", function (e) {
	reloadMore();
});
var arTableVars = [tableView,headerLabel,footerLabel];

win2.add(tableView);

win1.add(scrollView);
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();

footerLabel.addEventListener("click", function(e) {
	reloadMore();
});
btnSubmitSearch.addEventListener("click", function(e) {
	zip = ioZip.value;
	age = ioAge.value;
	var val = [];
	val["zip"] = new validate(zip,"required|zip");
	val["age"] = new validate(age,"required|numeric");
	if(!val["zip"].result&&!val["age"].result) {
		errorAl = Titanium.UI.createAlertDialog({
			title: "Error",
			message: 'Please Fill in the required Fields',
			buttonNames: ['OK']
		});
		errorAl.show();
	} else {
		var progDialog = Titanium.UI.createActivityIndicator({
			height:50,
			width:10,
			message:''
		});
		progDialog.show();

		arPost = {
			"scs":zip,
			"age":age,
			"gender":ioGenderVal,
			"tobacco":ioTobaccoVal,
			"msplan":ioMsPlanVal
		}
		ajax.post("",arPost, function() {
			consoleEcho(this.responseText);
			json = JSON.parse(this.responseText);
			if(json.status=='1') {
				arSettings.tempData = [];
				tableView.setData([]);
				tableView.setData(proCessTable(tableView,json.data,json.extra));
				headerLabel.text = 'Displaying: '+json.extra.page+' of '+json.extra.iTotalRecord; // header;
				footerLabel.text = 'Load More..'; // footer
				arSettings.tempQuery = arPost
				arSettings.tempQuery.page = parseInt(json.extra.page)+1;
			} else {
				progDialog.hide();
				alertDialog = Titanium.UI.createAlertDialog({
					title: "Result",
					message: json.msg,
					buttonNames: ['OK']
				});
				alertDialog.show();
			}
			tabGroup.setActiveTab(1);
			progDialog.hide();
		}, function() {
			switch(this.readyState) {
				case 1:
					progDialog.message="Connection established";
					break;
				case 2:
					progDialog.message="Request received ";
					break;
				case 3:
					progDialog.message="Processing request";
					break;
				case 4:
					progDialog.message="Request finished and response is ready";
					break;
			}
		}, function() {
			alertDialog = Titanium.UI.createAlertDialog({
				title: "Error",
				message: 'An Error Acquired',
				buttonNames: ['OK']
			});
			alertDialog.show();
		},
		false, function(e) {
			consoleEcho(this.progress);
			var kb = this.getResponseHeader('Content-Length');
			total = parseInt(kb)*1024/100;
			progDialog.message = kb;
			consoleEcho('Downloaded: ' + kb + ' KB');
		}
		);

	}
});

function reloadMore() {
	var progDialogAppend = Titanium.UI.createActivityIndicator({
		height:50,
		width:10,
		message:''
	});
	progDialogAppend.show();
	consoleEcho('{ "scs":'+arSettings.tempQuery.scs+',"age":'+arSettings.tempQuery.age+',"gender":'+arSettings.tempQuery.ioGenderVal+',"tobacco":'+arSettings.tempQuery.ioTobaccoVal+',"msplan":'+arSettings.tempQuery.ioMsPlanVal+', "page"'+arSettings.tempQuery.page+'}');
	ajax.post("",arSettings.tempQuery, function(e) {
		consoleEcho(this.responseText);

		json = JSON.parse(this.responseText);
		if(json.status=='1') {
			tableView.setData([]);
			tableView.setData(proCessTable(tableView,json.data,json.extra));
			headerLabel.text = 'Displaying: '+json.extra.page+' of '+json.extra.iTotalRecord; // header;
			if(arSettings.tempData.length==json.extra.iTotalRecord) {
				footerLabel.text = 'End of list';
				footerLabel.removeEventListener('click', function() {
					return false;
				});
			} else {
				footerLabel.text = 'Load More..';
			}
			footerLabel.text = 'Load More..'; // footer
			arSettings.tempQuery.page = parseInt(json.extra.page)+1;
		} else {
			alertDialog = Titanium.UI.createAlertDialog({
				title: "Result",
				message: json.msg,
				buttonNames: ['OK']
			});
			alertDialog.show();
		}
		tabGroup.setActiveTab(1);
		progDialogAppend.hide();
	}, function() {
		switch(this.readyState) {
			case 1:
				progDialogAppend.message="Connection established";
				break;
			case 2:
				progDialogAppend.message="Request received ";
				break;
			case 3:
				progDialogAppend.message="Processing request";
				break;
			case 4:
				progDialogAppend.message="Request finished and response is ready";
				break;
		}
	}, function() {
		progDialogAppend.hide();
		alertDialog = Titanium.UI.createAlertDialog({
			title: "Error",
			message: 'An Error Acquired',
			buttonNames: ['OK']
		});
		alertDialog.show();
	},
	false, function(e) {
		consoleEcho(this.progress);
		var kb = this.getResponseHeader('Content-Length');
		total = parseInt(kb)*1024/100;
		progDialogAppend.message = kb;
		consoleEcho('Downloaded: ' + kb + ' KB');
	});
}
