
var headerView = forms.label("This is the Header",'headerView',"labelText");
var footerView = forms.label("This Is The Footer",'footerView',"labelText");

// create FormElements;
var data=[];
var zipRow 			= Titanium.UI.createTableViewRow({className :'rowFormSearch'});
var ageRow 			= Titanium.UI.createTableViewRow({className :'rowFormSearch'});
var msPlanRow 		= Titanium.UI.createTableViewRow({className :'rowFormSearch',hasChild:true,title:"msPlan"});
var genderRow 		= Titanium.UI.createTableViewRow({className :'rowFormSearch',hasChild:true,title:"gender"});
var tobacooRow 		= Titanium.UI.createTableViewRow({className :'rowFormSearch',hasChild:true,title:"tobacco"});
var zipLabel 		= forms.label("Zip Code",'zipLabel',"formLabelText");
var ageLabel 		= forms.label("age",'ageLabel',"formLabelText");
var msPlanLabel		= forms.label("Ms Plan",'msplanLabel',"formLabelText");
var genderLabel 	= forms.label("Gender",'genderLabel',"formLabelText");
var tobaccoLabel 	= forms.label("Tobacco",'tobaccoLabel',"formLabelText");
var zipTextBox		= forms.text("00000","zipTextBox","formTextBox");
var ageTextBox		= forms.text("00", "ageTextBox","formTextBox");

var zipView  		= Titanium.UI.createView({id:"zipView",className:"formSearchView"});
var ageView  		= Titanium.UI.createView({id:"ageView",className:"formSearchView"});
var msPlanView  	= Titanium.UI.createView({id:"msPlanView",className:"formSearchView"});
var genderView  	= Titanium.UI.createView({id:"genderView",className:"formSearchView"});
var tobaccoView  	= Titanium.UI.createView({id:"tobaccoView",className:"formSearchView"});

genAdd(zipView, [zipLabel,zipTextBox]);
genAdd(ageView, [ageLabel,ageTextBox]);
genAdd(msPlanView, [msPlanLabel]);
genAdd(genderView, [genderLabel]);
genAdd(tobaccoView, [tobaccoLabel]);

zipRow.add(zipView);
data.push(zipRow);
ageRow.add(ageView);
data.push(ageRow);

msPlanRow.add(msPlanView);
data.push(msPlanRow);
genderRow.add(genderView);
data.push(genderRow);
tobacooRow.add(tobaccoView);
data.push(tobacooRow);



var tableView = Titanium.UI.createTableView({
	data:data,
	headerView:headerView,
	footerView:footerView,
	id:"searchForm",
	className:"tableView",
});
