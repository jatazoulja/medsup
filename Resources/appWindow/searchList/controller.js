winSearhList.add(searchScrollView);
winSearhList.open();

ioMsPlan.addEventListener('change', function(e) {
	ioMsPlanVal = e.row;
});
ioGender.addEventListener('change', function(e) {
	ioGenderVal = e.row;
});
ioTobacco.addEventListener('change', function(e) {
	ioTobaccoVal = e.row;
});
function error(r) {
	switch(r) {
		case 0:
			msg = "Zip Code is required and should only be numeric value";
			break;
		case 1:
			msg = "Zip Code is required and should only be numeric value";
			break;
		default:
			msg = "Unkown Error";
	}
	var searchLogInAlert = Titanium.UI.createAlertDialog({
		title: "Validation Error",
		message: msg,
		buttonNames: ['OK']
	})
	searchLogInAlert.show();
}

// button
resetBtn.addEventListener("click", function(e) {
	zipTextBox.value 	="";
	ageTextBox.value 	="";
	ioTobaccoVal 		=""
	ioGenderVal			=""
	ioMsPlanVal			=""
	ioMsPlan.setSelectedRow(0,0,true);
	ioGender.setSelectedRow(0,0,true);
	ioTobacco.setSelectedRow(0,0,true);
});

searchBtn.addEventListener("click", function(e) {
	var arDataPost = [
		new validate(zipTextBox.value,"required|numeric"),
		new validate(ageTextBox.value,"required|numeric"),
	];
	for (var i=0; i < arDataPost.length; i++) {
		if(arDataPost[i]) {
			continue;			
		} else {
			return error(i);
		}
	};
	var SearchLoading = Titanium.UI.createActivityIndicator({
		height:50,
		width:10,
		message:''
	});
	SearchLoading.show();
	arPost = {
		"scs":zipTextBox.value,
		"age":ageTextBox.value,
		"gender":ioGenderVal,
		"tobacco":ioTobaccoVal,
		"msplan":ioMsPlanVal
	}
	ajax.post("",arPost, 
		function() {
			json = JSON.parse(this.responseText)
			if(json.status=="1") {
				SearchLoading.hide();
				arSettings.tesPass = this.responseText;
				var winTableResult = Titanium.UI.createWindow({
					title:'Search Result',
					backgroundImage:"default.png",
					fullscreen: true,
					navBarHidden: true,
					url:"appWindow/tableResult/init.js",
					arData: this.responseText,
					arPost:arPost
				});
				winTableResult.open({animate:true});
			} else {
				SearchLoading.hide();
				var searchAjaxError = Titanium.UI.createAlertDialog({
					title: "Loading",
					message: json.msg,
					buttonNames: ['OK']
				});
				logInError.show();
				ioUsername.focus();
			}
		}, 
		function() {
			switch(this.readyState) {
				case 1:
					SearchLoading.message="Connection established";
					break;
				case 2:
					SearchLoading.message="Request received ";
					break;
				case 3:
					SearchLoading.message="Processing request";
					break;
				case 4:
					SearchLoading.message="Request finished and response is ready";
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

});