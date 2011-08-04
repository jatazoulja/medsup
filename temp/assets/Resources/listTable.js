Titanium.include("settings.js");
Titanium.include("library.js");

var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({  
    title:'Search Form',
	backgroundImage:"default.png",
});
var tab1 = Titanium.UI.createTab({  
    title:'Search Form',
    window:win1
});

var win2 = Titanium.UI.createWindow({  
    title:'Results',
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
var ioGenderData = [];
ioGenderData[0]=Titanium.UI.createPickerRow({title:'Male',value:"M"});
ioGenderData[1]=Titanium.UI.createPickerRow({title:'Female',value:"F"});
ioGenderData[2]=Titanium.UI.createPickerRow({title:"Don't Care",value:""});
ioGenderData[3]=Titanium.UI.createPickerRow({title:'Unknown',value:""});
ioGender.add(ioGenderData);


var optTobacco = Titanium.UI.createLabel({
	text:'Tobacco:',
	height:30,
	width:"60%",
	color:'#222',
	font: {
		fontSize:16
	},
});
var ioTobacco = Titanium.UI.createPicker({
	width:"60%",
	color:'#222'
});
var ioTobaccoData = [];
ioTobaccoData[0]=Titanium.UI.createPickerRow({title:'Yes',value:"Y"});
ioTobaccoData[1]=Titanium.UI.createPickerRow({title:'No',value:"N"});
ioTobaccoData[2]=Titanium.UI.createPickerRow({title:"Don't Care",value:""});
ioTobaccoData[3]=Titanium.UI.createPickerRow({title:'Unknown',value:""});
ioTobacco.add(ioTobaccoData);


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
view.add(optGender);
view.add(ioGender);
view.add(optTobacco);
view.add(ioTobacco);
view.add(btnFormSearch);

scrollView.add(view);
win1.add(scrollView);
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();


btnFormSearch.addEventListener("click",function(){
	Titanium.API.info(
		"{ "+ioZip.value+", "+ioAge.value+", "+ioGender.value+", "+ioTobacco.value+" }"
	);
})
