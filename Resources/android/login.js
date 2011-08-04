Titanium.include("config/config.js");
Titanium.include("libs/library.js");

var wLoginWin = Ti.UI.currentWindow;
var image = Titanium.UI.createImageView({
	top: 65,
	width:200,
	height:40,
	image:'logo.png'
	});

var ioUsername = Titanium.UI.createTextField({
	width: "60%",
	color: "#222",
	paddingLeft: 5,
	font: {
		fontSize:16
	},
	height: 40,
	top: 165,
	value:"agent"
});

var lblUsername = Titanium.UI.createLabel({
	text:'Username:',
	height:30,
	width:"60%",
	color:'#222',
	font: {
		fontSize:16
	},
	top: 140
});

var ioPassword = Titanium.UI.createTextField({
	width: "60%",
	color: "#222",
	paddingLeft: 5,
	font: {
		fontSize:16
	},
	height: 40,
	top: 235,
	passwordMask:true,
	value:"m3dsupp"
});

var lblPassword = Titanium.UI.createLabel({
	text:'Password:',
	height:30,
	width:"60%",
	color:'#222',
	font: {
		fontSize:16
	},
	top: 210
});
var btnLogin = Titanium.UI.createButton({
	width: "50%",
	color: "#555",
	font: {
		fontSize: 22,
		fontWeight: "bold"
	},
	height: 50,
	top: 280,
	title: "Login"
});

var loading = Titanium.UI.createLabel({
	text:':',
	height:30,
	width:"60%",
	color:'#222',
	font: {
		fontSize:16
	},
	top: 210
});
wLoginWin.add(image);
wLoginWin.add(ioUsername);
wLoginWin.add(lblUsername);
wLoginWin.add(ioPassword);
wLoginWin.add(lblPassword);
wLoginWin.add(btnLogin);
wLoginWin.add(loading);
wLoginWin.arSettings = arSettings;
// btnLogin.addEventListener('click',getValidLogin);
var activity = Ti.Android.currentActivity;


activity.onCreateOptionsMenu = function(e) {
    Ti.API.debug("In onCreateOptionsMenu");
    var menu = e.menu;
    var setOption = menu.add({ title: "settings" });
    var menuItem = menu.add({ title: "Item 1" });
    setOption.setIcon("/images/Menu/options.png")
    setOption.addEventListener("click", function(e) {
        var w = Titanium.UI.createWindow({
    		url:'appOption.js'
		});
		w.open();
		w.arSettings = wLoginWin.arSettings;
    });
    menuItem.addEventListener("click", function(e) {
        Ti.API.debug("I was clicked");
    });
};


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
					// wLoginWin.remove(image);
					// wLoginWin.remove(ioUsername);
					// wLoginWin.remove(lblUsername);
					// wLoginWin.remove(ioPassword);
					// wLoginWin.remove(lblPassword);
					// wLoginWin.remove(btnLogin);
					// wLoginWin.remove(loading);
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
			   	if (evt.lengthComputable) {  //evt.loaded the bytes browser receive
			      //evt.total the total bytes seted by the header
			      //
			    var percentComplete = (evt.loaded / evt.total)*100;  
			     // $('#progressbar').progressbar( "option", "value", percentComplete );
			   	} 
			},
			function(e) {
				loading.text = e.progress;
			}
		
		);
	}
	
});