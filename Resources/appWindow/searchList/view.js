
var searchScrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    className:"formSearchView",
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});


ioMsPlanData = [
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

var ioMsPlan = forms.selectOne({top:0},'selectMsPlan','selectOne',ioMsPlanData,true,2);
var ioMsPlanVal ='';


ioGenderData = [
	{title:'Male',custom_item:'M'},
	{title:'Female',custom_item:'F'},
	{title:'Don\'t Care',custom_item:'D'},
	{title:'Unknown',custom_item:'E'}
]
var ioGender = forms.selectOne({top:0},'selectGender','selectOne',ioGenderData,true,2);
var ioGenderVal='';

ioTobaccoData = [
	{title:'Yes',custom_item:'Y'},
	{title:'No',custom_item:'N'},
	{title:'Don\'t Care',custom_item:'D'},
	{title:'Unknown',custom_item:'E'}
]
var ioTobacco = forms.selectOne({top:0},'selectTobaco','selectOne',ioTobaccoData,true,2);
var ioTobaccoVal='';

// create FormElements;
var fleft =Ti.UI.createView({id: "searchLabelCont1", className: "searchLabelCont" });
var fright =Ti.UI.createView({id: "searchLabelCont2", className: "searchLabelCont" });

var zipLabel 		= forms.label("Zip Code",'zipLabel',"formLabelText");
var zipTextBox		= forms.text("00000","zipTextBox","formTextBox");
var zipView			= Ti.UI.createView({id:"zipView",className:"formsVertical"});

var ageLabel 		= forms.label("age",'ageLabel',"formLabelText");
var ageTextBox		= forms.text("00", "ageTextBox","formTextBox");
var ageView			= Ti.UI.createView({id:"ageView",className:"formsVertical"});

var msPlanLabel		= forms.label("Ms Plan",'msplanLabel',"formLabelText");
var msPlanView		= Ti.UI.createView({id:"ageView",className:"formsVertical"});
var genderLabel 	= forms.label("Gender",'genderLabel',"formLabelText");
var genderView		= Ti.UI.createView({id:"genderView",className:"formsVertical"});
var tobaccoLabel 	= forms.label("Tobacco",'tobaccoLabel',"formLabelText");
var tobaccoView		= Ti.UI.createView({id:"tobaccoView",className:"formsVertical"});

var searchBtn		= forms.button("Search","searchBtn","formBtn");
var resetBtn		= forms.button("reset","resetBtn","formBtn");
var btnView			= Ti.UI.createView({id:"ageView",className:"formsVertical",bottom:0});



$dataLabel = [
	zipView,
	ageView,
	msPlanView,
	genderView,
	tobaccoView,
	btnView
];

genAdd(zipView, [zipLabel,zipTextBox]);
genAdd(ageView, [ageLabel,ageTextBox]);
genAdd(msPlanView, [msPlanLabel,ioMsPlan]);
genAdd(genderView, [genderLabel,ioGender]);
genAdd(tobaccoView, [tobaccoLabel,ioTobacco]);
genAdd(btnView, [searchBtn,resetBtn]);


genAdd(searchScrollView, $dataLabel);


