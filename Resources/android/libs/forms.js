var forms = {
	label : function() {
		var arObj = "({";
		arObj += "text : '"+arguments[0]+"'";
		if(arguments.length>1) {
			id = (arguments[1] && typeof arguments[1]=="string") ? "'"+arguments[1]+"'" : "'' ";
			className = (arguments[2] && typeof arguments[2]=="string") ?"'"+ arguments[2]+"'" : "'labelText'" ;
			arObj += ", id :"+id;
			arObj += ", className :"+className;
			for (i=2; i<arguments.length; i++) {
				switch(typeof arguments[i]) {
					case 'object' :
						for(assoc in arguments[i]) {
							arguments[i][assoc] = (typeof arguments[i][assoc] == "string") ? "'"+arguments[i][assoc]+"'" : arguments[i][assoc];
							arObj += ", "+assoc+": "+arguments[i][assoc];
						}
						break;
					default:
				}
			}
		}
		arObj += "});";
		arObj = eval(arObj);
		return Titanium.UI.createLabel(arObj);
	},
	
	text : function() {
		var arObj = "({";
		arObj += "hintText : '"+arguments[0]+"'";
		if(arguments.length>1) {
			id = (arguments[1] && typeof arguments[1]=="string") ? "'"+arguments[1]+"'" : "'' ";
			className = (arguments[2] && typeof arguments[2]=="string") ?"'"+ arguments[2]+"'" : "'inputText'" ;
			arObj += ", id :"+id;
			arObj += ", className :"+className;
			for (i=2; i<arguments.length; i++) {
				switch(typeof arguments[i]) {
					case 'object' :
						for(assoc in arguments[i]) {
							arguments[i][assoc] = (typeof arguments[i][assoc] == "string") ? "'"+arguments[i][assoc]+"'" : arguments[i][assoc];
							arObj += ", "+assoc+": "+arguments[i][assoc];
						}
						break;
					default:
				}
			}
		}
		arObj += "});";
		arObj = eval(arObj);
		return Titanium.UI.createTextField(arObj);
	},
	selectOne : function() {
		var select='';
		argsObj = "({";
		id = (arguments[1] && typeof arguments[1]=="string") ? "'"+arguments[1]+"'" : "'' ";
		className = (arguments[2] && typeof arguments[2]=="string") ?"'"+ arguments[2]+"'" : "'inputText'" ;
		argsObj += "id :"+id;
		argsObj += ", className :"+className;		
		if(typeof arguments[0] == "object") {
			for(assoc in arguments[0]) {
				arguments[0][assoc] = (typeof arguments[0][assoc] == "string") ? "'"+arguments[0][assoc]+"'" : arguments[0][assoc];
				argsObj += ", "+assoc+": "+arguments[0][assoc];
			}

		} 
		argsObj += "});";
		argsObj = eval(argsObj);
		select = Titanium.UI.createPicker(argsObj);
		
		arMe = arguments[3];
		data = [];
		if(arguments[4]) {
			data[0]=Ti.UI.createPickerRow({title:'',custom_item:''});
			j=1;
		} else {
			j=0;
		}
		for(i=0;i<arMe.length;i++) {
			consoleEcho(arMe[i]);
			data[j]=Ti.UI.createPickerRow(arMe[i]);
			j++;
		}
		select.add(data);
		select.selectionIndicator = true;
		return select;
	},
	button : function() {
		var arObj = "({";
		arObj += "title : '"+arguments[0]+"'";
		if(arguments.length>1) {
			id = (arguments[1] && typeof arguments[1]=="string") ? "'"+arguments[1]+"'" : "'' ";
			className = (arguments[2] && typeof arguments[2]=="string") ?"'"+ arguments[2]+"'" : "'labelText'" ;
			arObj += ", id :"+id;
			arObj += ", className :"+className;
			for (i=2; i<arguments.length; i++) {
				switch(typeof arguments[i]) {
					case 'object' :
						for(assoc in arguments[i]) {
							arguments[i][assoc] = (typeof arguments[i][assoc] == "string") ? "'"+arguments[i][assoc]+"'" : arguments[i][assoc];
							arObj += ", "+assoc+": "+arguments[i][assoc];
						}
						break;
					default:
				}
			}
		}
		arObj += "});";
		arObj = eval(arObj);
		return Titanium.UI.createButton(arObj);
	}
};