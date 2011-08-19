Titanium.include("../../config/config.js");
Titanium.include("../../libs/library.js");

function proCessTable(data,extra) {
	for (var i = 0; i < data.length; i++) {
		var row 			= Titanium.UI.createTableViewRow({
			height:50,
			width:"auto",
			layout: 'horizontal',
		});

		// creat View
		var viewThumbsCont	= Titanium.UI.createView({
			className:'thumbs'
		});
		var viewDetailsCont = Titanium.UI.createView({
			className:'viewDetailsCont'
		});	
		var viewTitleCont 	= Titanium.UI.createView({
			className:'viewTitleCont'
		});
		var viewDescCont 	= Titanium.UI.createView({
			className:'viewDescCont'
		});
		CARRIERNAME = data[i].CARRIERNAME;
		var carrierName 	= CARRIERNAME.replace(/\W/gi,'').toLowerCase();
		var carrierImage  	= {
			top: -10,
			left:0,
			width:90,
			height:60,
			backgroundColor:"#fe0000",
			image:'images/carrier/'+carrierName+'.png',
			backgroundImage:'images/carrier/'+carrierName+'.png'
		};		

		genAdd(viewTitleCont,[forms.label(data[i].MONTHLY,"monthly"+i,"monthly",{top: -10,left:0,width:"49%",height:60}), forms.label(data[i].ANNUAL,"annual"+i,"annual",{top: -10,left:0,width:"49%",height:60,textAlign:"right"})])
		genAdd(viewDescCont,forms.label("MsPlan: "+data[i].MSPLAN+" Type: "+data[i].PLAN_TYPE,"planType_"+i,"planType"));
		genAdd(viewDetailsCont,[viewTitleCont,viewDescCont])
		genAdd(viewThumbsCont,Titanium.UI.createImageView(carrierImage));

		genAdd(row,[viewThumbsCont,viewDetailsCont]);


		row.className = "item_"+extra.page+"_"+i;
		rowNum = parseInt(extra.page)-1;
		rowNum = rowNum*10;
		arSettings.tempData.push(row);
	}
}




Titanium.include("view.js");
Titanium.include("controller.js");
