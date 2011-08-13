/**
 * Main Class Function
 */
(function(){var a=false,b=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(c){function g(){if(!a&&this.init)this.init.apply(this,arguments)}var d=this.prototype;a=true;var e=new this;a=false;for(var f in c){e[f]=typeof c[f]=="function"&&typeof d[f]=="function"&&b.test(c[f])?function(a,b){return function(){var c=this._super;this._super=d[a];var e=b.apply(this,arguments);this._super=c;return e}}(f,c[f]):c[f]}g.prototype=e;g.prototype.constructor=g;g.extend=arguments.callee;return g}})()

/**
 * Main Settings Configuration
 */
Titanium.include("ajax.js");
Titanium.include("forms.js");
Titanium.include("validation.js");
Titanium.include("debug.js");
function genAdd(thisobj,thisar) {
	for(x=0;x<thisar.length;x++) {
		thisobj.add(thisar[x]);
	}
}

