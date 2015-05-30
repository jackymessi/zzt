Ext.define('ZZT.view.South', {
	extend : 'Ext.Toolbar',
	initComponent : function() {
		Ext.apply(this, {
			id : "bottom",
			region : "south",
			border : false,
			height : 23,
			items : [{
						flex : 1,
						disabled : true
					}, {
						flex : 1,
						border : false,
						html : "<p>四川用联信息技术有限公司</p>"
					}, {
						flex : 1,
						disabled : true
					}]
		});
		this.callParent(arguments);
	}
});
