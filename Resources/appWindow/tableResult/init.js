Titanium.include("../../config/config.js");
Titanium.include("../../libs/library.js");

function proCessTable(data,extra) {
	var rowPager 			= Titanium.UI.createTableViewRow({
		height:20,
		width:"200",
		backgroundColor:"#fff",
	});
	var totalPage = ((parseInt(extra.iTotalRecord)%10)>0) ? Math.floor(parseInt(extra.iTotalRecord)/10)+1 : parseInt(extra.iTotalRecord)/10;
	consoleEcho("Displaying "+extra.page+" of "+totalPage.toString());
	rowPager.add(forms.label("Displaying Page "+extra.page+" of "+totalPage.toString(),"pager"+extra.page,"pager",{color:"#cfcfcf",backgroundColor:"#5177f4",top:0 ,left:0,width:"auto",height:25}));
	arSettings.tempData.push(rowPager);
	for (var i = 0; i < data.length; i++) {
		var row 			= Titanium.UI.createTableViewRow({
			height:80,
			width:"auto",
			backgroundColor:"#fff",
		});

		CARRIERNAME = data[i].CARRIERNAME;
		var carrierName 	= CARRIERNAME.replace(/\W/gi,'').toLowerCase();
		var carrierImage  	= {
			top: 10,
			left:5,
			width:90,
			height:60,
			backgroundColor:"#fe0000",
			image:'/images/carrier/'+carrierName+'.png',
			backgroundImage:'/images/carrier/'+carrierName+'.png'
		};

		row.add(Titanium.UI.createImageView(carrierImage));
		row.add(forms.label(data[i].ANNUAL,"annual"+i,"annual",{fontSize:25,color:"#131313",top: 5,left:100,width:"80",height:25}));
		row.add(forms.label(data[i].MONTHLY,"monthly"+i,"monthly",{fontSize:25,color:"#131313",top: 5,right:0,width:"80",height:25,textAlign:"right"}));
		row.add(forms.label("MsPlan: "+data[i].MSPLAN,"msPlan_"+i,"desc",{top: 35,left:100,width:"auto",height:15,textAlign:"left"}));
		row.add(forms.label("Type: "+data[i].PLAN_TYPE,"planType_"+i,"desc",{top: 42,left:100,width:"auto",height:15,textAlign:"left"}));


		row.className = "item_"+extra.page+"_"+i;
		rowNum = parseInt(extra.page)-1;
		rowNum = rowNum*10;
		arSettings.tempData.push(row);
	}
}




Titanium.include("view.js");
Titanium.include("controller.js");
