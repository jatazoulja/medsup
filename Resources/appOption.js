Titanium.include("settings.js");


var thisWin = Titanium.UI.currentWindow;
var appOptionView = Titanium.UI.createView({
    backgroundColor:"#000"
});


		var dataSettings = [
			{title: "URL:" , value: arSettings.url },
			{title: "API Key:", value: arSettings.key},
			{title: "Contact us:", value: "jatazoulja@gmail.com"},
			];
		var rowData = [];
		for (var i = 0; i < dataSettings.length; i++) {
			var header = dataSettings[i].title; // The tweet message
			var desc = dataSettings[i].value; // The screen name of the user
			var row = Titanium.UI.createTableViewRow({layout: 'vertical'});

			var user_lbl = {
				text:header,
				left:54,
				width:120,
				top:0,
				font:{fontSize:16,fontWeight: "bold"},
				bottom:2,
				height:20,
				textAlign:'left',
				color:'#fff',
			};

			var tweet_lbl = {
				text:desc,
				left:54,
				top:22,
				bottom:2,
				height:Math.ceil(dataSettings.length / 30) * 23,
				width:236,
				textAlign:'left',
				font:{fontSize:14}
			};
	   	 	var post_view = Titanium.UI.createView({
	   			 height:'auto',
	   			 top:0,
	   			 right:5,
	   			 bottom:0,
	   			 backgroundImage:"/images/Dialog/options.png",
	   			 left:5
	   		 });
	   		post_view.add(Ti.UI.createLabel(user_lbl))
			post_view.add(Ti.UI.createLabel(tweet_lbl));
			row.add(post_view);
			row.className = "item"+i;
			rowData[i] = row;
		}

   	 	var tableView = Titanium.UI.createTableView({data:rowData});


thisWin.add(appOptionView);
appOptionView.add(tableView);
