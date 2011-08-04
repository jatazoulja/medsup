Titanium.include("settings.js");
Titanium.include("library.js");
var wLoginWin = Ti.UI.currentWindow;
var image = Titanium.UI.createImageView({
	top: 65,
	url:'logo.png'
	});

var ioUsername = Titanium.UI.createTextField({
	width: "60%",
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font: {
		fontSize:16
	},
	height: 40,
	top: 165
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
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font: {
		fontSize:16
	},
	height: 40,
	top: 235
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

wLoginWin.add(image);
wLoginWin.add(ioUsername);
wLoginWin.add(lblUsername);
wLoginWin.add(ioPassword);
wLoginWin.add(lblPassword);
wLoginWin.add(btnLogin);
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
	arPost = { "user":user, "pass":pass, "submit" : submit}
	ajax.post("login.php",arPost,
		function() {
			Titanium.API.info(this.responseText);
			json = JSON.parse(this.responseText)
			if(json.status=="1") {
				// alert(json.msg);
		        var oList = Titanium.UI.createWindow({
		    		url:'listTable.js'
				});
				oList.open();
				oList.arSettings = wLoginWin.arSettings;
				wLoginWin.close();
			} else {
				alert(json.msg);
			}
		},
		function() {
			if(this.readyState==4) {
				Titanium.API.info("message recieve");
			}
		},
		function() {
			alertDialog = Titanium.UI.createAlertDialog({
				title: "Error",
				message: 'an Error acquired',
				buttonNames: ['OK','Cancel']
			});
			alertDialog.show();
		}
	
	);
	
});