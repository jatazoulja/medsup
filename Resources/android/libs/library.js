/**
 * Main Class Function
 */
(function(){var a=false,b=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(c){function g(){if(!a&&this.init)this.init.apply(this,arguments)}var d=this.prototype;a=true;var e=new this;a=false;for(var f in c){e[f]=typeof c[f]=="function"&&typeof d[f]=="function"&&b.test(c[f])?function(a,b){return function(){var c=this._super;this._super=d[a];var e=b.apply(this,arguments);this._super=c;return e}}(f,c[f]):c[f]}g.prototype=e;g.prototype.constructor=g;g.extend=arguments.callee;return g}})()

/**
 * Main Settings Configuration
 */
Titanium.include("ajax.js");
Titanium.include("forms.js");
Titanium.include("validation.js");
Titanium.include("debug.js");


function proCessTable(tableView,data,extra) {

	var rowData = [];
	for (var i = 0; i < data.length; i++) {
		var PLAN_TYPE = data[i].PLAN_TYPE;			// Done
		var CARRIERNAME = data[i].CARRIERNAME;		// Done
		var MONTHLY = data[i].MONTHLY;				// Done
		var ANNUAL = data[i].ANNUAL;
		var MSPLAN = data[i].MSPLAN;				// Done
		var AGE = data[i].AGE;						// Done
		var row = Titanium.UI.createTableViewRow({
			title:MONTHLY.replace(/\s/gi,''),
			height:"auto",
			layout: 'vertical',
			url:"http://yahoo.com",
			hasChild:true
		});
		CARRIERNAME = CARRIERNAME.replace(/\W/gi,'').toLowerCase();
		
		carrierImage  = {
			top: -10,
			left:0,
			width:90,
			height:60,
			backgroundColor:"#fe0000",
			image:'/images/carrier/'+CARRIERNAME+'.png'
		};

		header	= ANNUAL.replace(/\s/gi,'');
		var oHeader = {
			zIndex:15,
			text:header,
			left:0,
			width:"auto",
			top:-20,
			font: {
				fontSize:16,
				fontWeight: "bold"
			},
			height:20,
			textAlign:'left',
			color:'#222',
		};
		 		
		descreption =  "MsPlan: "+MSPLAN+"\nType: "+PLAN_TYPE;
		var oDescreption = {
			text:descreption,
			left:0,
			top:25,
			font: {
				fontSize:10,
				fontWeight: "bold"
			},
			height:25,
			textAlign:'left',
			color:'#333',
		}

		var MONTHLY = {
			text:MONTHLY.replace(/\s/gi,''),
			width:"98%",
			left:0,
			top:0,
			height:22,
			textAlign:'right',
			font: {
				fontSize:18
			},
			zIndex:10,
			color:'#F6960B'
		};
		var post_view = Titanium.UI.createView({
			width:"80%",
			height:'auto',
			top:0,
			left:95,
			layout: 'horizontal'
		});
		var verticalView = Titanium.UI.createView({
			width:"auto",
			height:'auto',
			top:5,
			right:5,
			bottom:5,
			left:5,
			layout: ''
		});
		post_view.add(Ti.UI.createLabel(oDescreption));
		post_view.add(Ti.UI.createLabel(oHeader));		
		
		verticalView.add(Titanium.UI.createImageView(carrierImage));
		verticalView.add(Ti.UI.createLabel(MONTHLY));
		verticalView.add(post_view);

		row.add(verticalView);
		row.className = "item_"+extra.page+"_"+i;
		rowNum = parseInt(extra.page)-1;
		rowNum = rowNum*10;
		arSettings.tempData[rowNum+i] = row;
	}
		tableView.addEventListener('click', function(e){
			alertDialog32 = Titanium.UI.createAlertDialog({
				title: "Monthly:",
				message: e.rowData.title,
				buttonNames: ['OK']
			}).show();
		})
	// if(arSettings.tempData.length==0) {
		// arSettings.tempData = rowData;
	// } else {
		// arSettings.tempData.push(rowData);
	// }
	// consoleEcho(arSettings.tempData.length);	
	return arSettings.tempData;
	
}