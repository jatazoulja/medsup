var listForm = Class.extend({
	
	init: function() {
		return this.view();
	},
	
	view : function() {
		Titanium.UI.createTableView({
			data:[],
			id:this.id,
			className:this.className
		})
	},
	rowData: function(){}
});

