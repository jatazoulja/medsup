winSearhList.add(tableView);
winSearhList.open();
var msPlanWindow  = Titanium.UI.createWindow({
	title:'Ms Plan',
	backgroundImage:"default.png",
	fullscreen: true,
	navBarHidden: true
});
var msPlanData = [{title:"Row 1",val:"A"},{title:"Row 2",val:"B"}];
var msPlanTable = Titanium.UI.createTableView({data:msPlanData});
msPlanWindow.add(msPlanTable);

msPlanTable.addEventListener("click",function(e) {
	msPlanVal.text = e.rowData.val;
	msPlanWindow.close();
	winSearhList.open({animate:true});
})

tableView.addEventListener("click",function(e){
	if(e.rowData.hasChild) {
		msPlanWindow.open({animate:true});
	}
});



