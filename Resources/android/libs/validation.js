var validate = Class.extend({
	init : function(srt,opt) {
		this.gString="";
		this.gString=srt;
		this.result=true;
		if(typeof  opt == "string") {
			method = opt.split("|");
			for(i=0;i<method.length;i++) {
				eval("this."+method[i]+"()");
				if(this.result) {
					Titanium.API.info("validating: "+method[i]+" it is TRUE");
					continue;
				} else {
					Titanium.API.info("validating: "+method[i]+" it is FALSE Should stop now");
					return this.result;
				};
			}

		} else {
			data = "this."+opt+"()";
			eval(data);
		}
		return this.result;
	},
	execReg : function(reg) {
		return this.result=reg.test(this.gString);
	},
	// required field,
	required : function() {
		if(this.gString==null||this.gString=="") {
			return this.result=false;
		}

	},
	alphaNumeric : function() {
		patt=/^[a-zA-Z0-9]*$/;
		this.execReg(patt);
	},
	alpha : function() {
		patt=/^[a-zA-Z]*$/;
		this.execReg(patt);
	},
	numeric : function() {
		patt=/^[0-9]*$/;
		this.execReg(patt);
	},
	alphaNumericSpace : function() {
		patt=/^[a-zA-Z0-9\s]*$/;
		this.execReg(patt);
	},
	email : function() {
		patt=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
		this.execReg(patt);
	},
	zip : function() {
		patt=/^([0-9]{5}(?:-[0-9]{4})?)*$/;
		this.execReg(patt);
	}
});


