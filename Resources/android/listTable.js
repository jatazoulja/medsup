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

// Start Forms

var optZip = Titanium.UI.createLabel({
	text:'Zip Code:',
	height:30,
	width:"60%",
	color:'#222',
	font: {
		fontSize:16
	},
});
var ioZip = Titanium.UI.createTextField({
	width: "60%",
	color: "#222",
	border: 1,
	borderRadius: 3,
	font: {
		fontSize:16
	},
	height: 40,
	value:'55074'
});
var optAge = Titanium.UI.createLabel({
	text:'Age',
	height:30,
	width:"60%",
	color:'#222',
	font: {
		fontSize:16
	},
});
var ioAge = Titanium.UI.createTextField({
	width: "60%",
	color: "#222",
	border: 1,
	borderRadius: 3,
	font: {
		fontSize:16
	},
	height: 40,
	value:'65'
});

var optGender = Titanium.UI.createLabel({
	text:'Gender:',
	height:30,
	width:"60%",
	color:'#222',
	font: {
		fontSize:16
	},
});
var ioGender = Titanium.UI.createPicker({
	width:"60%",
	color:'#222'
});
var ioGenderVal='';
var ioGenderData = [];
ioGenderData[0]=Titanium.UI.createPickerRow({
	title:'',
	custom_item:'',
	selected:true
});
ioGenderData[1]=Titanium.UI.createPickerRow({
	title:'Male',
	custom_item:'M'
});
ioGenderData[2]=Titanium.UI.createPickerRow({
	title:'Female',
	custom_item:'M'
});
ioGenderData[3]=Titanium.UI.createPickerRow({
	title:"Don't Care",
	custom_item:'D'
});
ioGenderData[4]=Titanium.UI.createPickerRow({
	title:'Unknown',
	custom_item:'E'
});
ioGender.add(ioGenderData);
ioGender.selectionIndicator = true;
ioGender.addEventListener('change', function(e) {
	ioGenderVal = e.row;
});
var optTobacco = Titanium.UI.createLabel({
	text:'Tobacco:',
	height:30,
	width:"60%",
	color:'#222',
	font: {
		fontSize:16
	},
});
var ioTobaccoVal = "";
var ioTobacco = Titanium.UI.createPicker({
	width:"60%",
});

var ioTobaccoData = [];
ioTobaccoData[0]=Ti.UI.createPickerRow({
	title:'',
	custom_item:'',
	selected:true
});
ioTobaccoData[1]=Ti.UI.createPickerRow({
	title:'Yes',
	custom_item:'Y'
});
ioTobaccoData[2]=Ti.UI.createPickerRow({
	title:'No',
	custom_item:'N'
});
ioTobaccoData[3]=Ti.UI.createPickerRow({
	title:'Don\'t Care',
	custom_item:'D'
});
ioTobaccoData[4]=Ti.UI.createPickerRow({
	title:'Unknown',
	custom_item:'E'
});
ioTobacco.add(ioTobaccoData);
ioTobacco.selectionIndicator = true;
ioTobacco.addEventListener('change', function(e) {
	ioTobaccoVal = e.row;
});
var optMsplan = Titanium.UI.createLabel({
	text:'MS Plan:',
	height:30,
	width:"60%",
	color:'#222',
	font: {
		fontSize:16
	},
});
var ioMsplanVal = "";
var ioMsplan = Titanium.UI.createPicker({
	width:"60%",
});
var ioMsplanData = []
ioMsplanData[0]=Ti.UI.createPickerRow({
	title:'',
	custom_item:'',
	selected:true
});
ioMsplanData[1]=Ti.UI.createPickerRow({
	title:'A',
	custom_item:'A'
});
ioMsplanData[2]=Ti.UI.createPickerRow({
	title:'B',
	custom_item:'B'
});
ioMsplanData[3]=Ti.UI.createPickerRow({
	title:'C',
	custom_item:'C'
});
ioMsplanData[4]=Ti.UI.createPickerRow({
	title:'C*',
	custom_item:'C*'
});
ioMsplanData[5]=Ti.UI.createPickerRow({
	title:'D',
	custom_item:'D'
});
ioMsplanData[6]=Ti.UI.createPickerRow({
	title:'F',
	custom_item:'F'
});
ioMsplanData[7]=Ti.UI.createPickerRow({
	title:'F*',
	custom_item:'F*'
});
ioMsplanData[8]=Ti.UI.createPickerRow({
	title:'G',
	custom_item:'G'
});
ioMsplanData[9]=Ti.UI.createPickerRow({
	title:'HD',
	custom_item:'HD'
});
ioMsplanData[10]=Ti.UI.createPickerRow({
	title:'K',
	custom_item:'K'
});
ioMsplanData[11]=Ti.UI.createPickerRow({
	title:'L',
	custom_item:'L'
});
ioMsplanData[12]=Ti.UI.createPickerRow({
	title:'M',
	custom_item:'M'
});
ioMsplanData[13]=Ti.UI.createPickerRow({
	title:'N',
	custom_item:'N'
});
ioMsplan.add(ioMsplanData);
ioMsplan.selectionIndicator = true;
ioMsplan.addEventListener('change', function(e) {
	ioMsplanVal = e.row;
});
var btnFormSearch = Titanium.UI.createButton({
	width: "50%",
	color: "#555",
	font: {
		fontSize: 22,
		fontWeight: "bold"
	},
	height: 50,
	title: "Search"
});

view.add(optZip);
view.add(ioZip);
view.add(optAge);
view.add(ioAge);

view.add(optMsplan);
view.add(ioMsplan);

view.add(optGender);
view.add(ioGender);
view.add(optTobacco);
view.add(ioTobacco);

view.add(btnFormSearch);

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

});
var arTableVars = [tableView,headerLabel,footerLabel];

win2.add(tableView);

win1.add(scrollView);
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();

footerLabel.addEventListener("click", function(e) {
	var progDialogAppend = Titanium.UI.createActivityIndicator({
		height:50,
		width:10,
		message:''
	});
	progDialogAppend.show();
	consoleEcho('{ "scs":'+arSettings.tempQuery.scs+',"age":'+arSettings.tempQuery.age+',"gender":'+arSettings.tempQuery.ioGenderVal+',"tobacco":'+arSettings.tempQuery.ioTobaccoVal+',"msplan":'+arSettings.tempQuery.ioMsplanVal+', "page"'+arSettings.tempQuery.page+'}');
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

});
btnFormSearch.addEventListener("click", function(e) {
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
			"msplan":ioMsplanVal
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



