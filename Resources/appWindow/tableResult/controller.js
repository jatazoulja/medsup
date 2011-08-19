var thisWin 	= Ti.UI.currentWindow;
arSettings.tempQuery = thisWin.arData;
arPost = thisWin.arPost;
json 		= JSON.parse(arSettings.tempQuery);
consoleEcho(arSettings.tempQuery);
proCessTable(json.data,json.extra);

tableView.setData(arSettings.tempData);

thisWin.add(tableView);

footerTableView.addEventListener("click", function(e) {
	loadingIcon.image= '/images/icons/icon_loading.gif';
	loadingIcon.backgroundImage = '/images/icons/icon_loading.gif';
	arPost["page"] = parseInt(json.extra.page)+1;
	consoleEcho(arPost);
	/*
	 * TODO : if page === TotalPages return false;
	 * 
	 */
	ajax.post("",arPost,
		function() {
			json = JSON.parse(this.responseText)
			if(json.status=="1") {
				loadingIcon.image = '/images/icons/more.gif';
				loadingIcon.backgroundImage='/images/icons/more.gif';
				proCessTable(json.data,json.extra);
				tableView.setData(arSettings.tempData);
			} else {
				var searchAjaxError = Titanium.UI.createAlertDialog({
					title: "Loading",
					message: json.msg,
					buttonNames: ['OK']
				});
				searchAjaxError.show();

			}
		}, 
		function() {
			switch(this.readyState) {
				case 1:
					//footerTableLabel.text="Connection established";
					break;
				case 2:
					//footerTableLabel.text="Request received ";
					break;
				case 3:
					//footerTableLabel.text="Processing request";
					break;
				case 4:
					//footerTableLabel.text="Request finished and response is ready";
					break;
			}
		}, 
		function() {
			alertDialog = Titanium.UI.createAlertDialog({
				title: "Error",
				message: 'An Error Acquired',
				buttonNames: ['OK']
			});
			alertDialog.show();
		}, 
		function(evt) {},
		function(e) {}
	);

})
