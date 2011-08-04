Titanium.include("config/config.js");
Titanium.include("libs/library.js");

var wLoginWin = Ti.UI.currentWindow;
var image = Titanium.UI.createImageView({
	top: 65,
	width:200,
	height:40,
	image:'logo.png'
	});

var lblUsername = forms.label("Username", "username", "textLabel"); 
var lblPassword = forms.label("Password", "password", "textLabel"); 
var ioUsername = forms.text('Username', 'ioUser', "textBox")
var ioPassword = forms.text('Password', 'ioPass', "textBox")
var btnLogin	= forms.button("Login","btnLogin","button",{top: 280});

var arElements = [
	image,
	ioUsername,
	lblUsername,
	ioPassword,
	lblPassword,
	btnLogin,
];

genAdd(wLoginWin,arElements);

wLoginWin.arSettings = arSettings;

btnLogin.addEventListener("click",function() {
	user = ioUsername.value;
	pass = ioPassword.value;
	submit = arSettings.key;
	var val = {};
	val["user"] = new validate(user,"required|alphaNumeric");
	val["pass"] = new validate(user,"required|alphaNumeric");
	if(!val["user"].result&&!val["pass"].result) {
		return alert("Login/Password is Invalid or Blank");
	} else {
		arPost = { "user":user, "pass":pass, "submit" : submit}
		ajax.post("login.php",arPost,
			function() {
				consoleEcho(this.responseText);
				json = JSON.parse(this.responseText)
				if(json.status=="1") {
					// alert(json.msg);
			        var oList = Titanium.UI.createWindow({
			    		url:'listTable.js'
					});
					oList.open();
					oList.arSettings = wLoginWin.arSettings;
				} else {
					progDialog = Titanium.UI.createAlertDialog({
						title: "Loading",
						message: json.msg,
						buttonNames: ['OK']
					});
					progDialog.show();
					ioUsername.focus();
				}
			},
			function() {
				if(this.readyState==4) {
					consoleEcho("message recieve");
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
			function(evt) {
				alert(evt.lengthComputable)
			   	if (evt.lengthComputable) {
			    var percentComplete = (evt.loaded / evt.total)*100;  
			   	} 
			},
			function(e) {
			}
		
		);
	}
	
});