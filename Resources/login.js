Titanium.include("config/config.js");
Titanium.include("libs/library.js");

var wLoginWin = Ti.UI.currentWindow;
var image = Titanium.UI.createImageView({
	top: 65,
	width:200,
	height:40,
	image:'logo.png',
	backgroundImage:'logo.png'
});

var lblUsername = forms.label("Username", "username", "textLabel");
var lblPassword = forms.label("Password", "password", "textLabel");
var ioUsername = forms.text('Username', 'ioUser', "textBox")
var ioPassword = forms.text('Password', 'ioPass', "textBox")
var btnLogin	= forms.button("Login","btnLogin","button");

var arElements = [
image,
lblUsername,
ioUsername,
lblPassword,
ioPassword,
btnLogin,
];

genAdd(wLoginWin,arElements);

wLoginWin.arSettings = arSettings;

btnLogin.addEventListener("click", function() {
	user = ioUsername.value;
	pass = ioPassword.value;
	submit = arSettings.key;
	var val = {};
	val["user"] = new validate(user,"required|alphaNumeric");
	val["pass"] = new validate(user,"required|alphaNumeric");
	if(!val["user"].result&&!val["pass"].result) {
		var logInAlert = Titanium.UI.createAlertDialog({
			title: "Validation Error",
			message: "You left the Username/Password Blank",
			buttonNames: ['OK']
		})
		logInAlert.show();
	} else {
		var logInLoading = Titanium.UI.createActivityIndicator({
			height:50,
			width:10,
			message:''
		});
		logInLoading.show();
		arPost = {
			"user":user,
			"pass":pass,
			"submit" : submit
		}
		ajax.post("login.php",arPost, function() {
			consoleEcho(this.responseText);
			json = JSON.parse(this.responseText)
			if(json.status=="1") {
				logInLoading.hide();
				Ti.include("appWindow/searchList/init.js");
				wLoginWin.close();
			} else {
				logInLoading.hide();
				var logInError = Titanium.UI.createAlertDialog({
					title: "Loading",
					message: json.msg,
					buttonNames: ['OK']
				});
				logInError.show();
				ioUsername.focus();
			}
		}, function() {
			switch(this.readyState) {
				case 1:
					logInLoading.message="Connection established";
					break;
				case 2:
					logInLoading.message="Request received ";
					break;
				case 3:
					logInLoading.message="Processing request";
					break;
				case 4:
					logInLoading.message="Request finished and response is ready";
					break;
			}
		}, function() {
			alertDialog = Titanium.UI.createAlertDialog({
				title: "Error",
				message: 'An Error Acquired',
				buttonNames: ['OK']
			});
			alertDialog.show();
		}, function(evt) {
			alert(evt.lengthComputable)
			if (evt.lengthComputable) {
				var percentComplete = (evt.loaded / evt.total)*100;
			}
		}, function(e) {
		}
		);
	}

});