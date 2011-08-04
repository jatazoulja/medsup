Titanium.include("settings.js");

function getLogin() {
	
}
// { "user":"johndoe", "pass":"opensesame", "otherfield":otherfield}
var ajax = {
	xhr : Titanium.Network.createHTTPClient(),
	post : function(url,serial,fn,fnReady,fnError) {
		this.xhr.onload = fn;
		this.xhr.onreadystatechange = (fnReady) ? fnReady : function() {return false} ;
		this.xhr.onerror = (fnError) ? fnError : function() {return false};
		Titanium.API.info(arSettings.url+url);
		this.xhr.open('POST', arSettings.url+url);
		this.xhr.send(serial);
	}
}
// 
	// var xhr = Titanium.Network.createHTTPClient();
	// xhr.onload = function() {
		// var json = JSON.parse(this.responseText);
		// var table = Titanium.UI.createTableView({
			// data:json
		// });
// 
		// Titanium.API.info(this.responseText);
		// if (!json) {
			// Titanium.API.info('Error - Null return!');
			// return;
		// }
		// win2.add(table);
	// };
	// xhr.onreadystatechange = function() {
		// Titanium.API.info(this.readyState);
		// if(this.readyState==4) {
			// alertDialog = Titanium.UI.createAlertDialog({
				// title: 'Status',
				// message: 'Data recieved!',
				// buttonNames: ['OK','CANCEL']
			// });
			// alertDialog.show();
		// }
	// };
	// xhr.onerror = function() {
		// alertDialog = Titanium.UI.createAlertDialog({
			// title: "Error",
			// message: 'an Error acquired',
			// buttonNames: ['OK','Cancel']
		// });
		// alertDialog.show();
	// }
	// xhr.onsendstream = function() {
		// Titanium.API.info(this.progress);
	// };
	// xhr.open('POST', '');
	// xhr.send();