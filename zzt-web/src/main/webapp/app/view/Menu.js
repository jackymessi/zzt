var store = Ext.create('Ext.data.TreeStore', {
    proxy:{
        type: 'ajax',
        url:'api/menu/v1/usermenulist'
    }
});

Ext.define('ZZT.view.Menu', {
	extend : 'Ext.tree.Panel',
	requires: [
        'Ext.tree.*',
        'Ext.data.*'
    ],
	alias : 'widget.smsmenu',
	id : 'mainMenu',
	initComponent : function() {
		Ext.apply(this, {
			title : Ext.util.Cookies.get("communityName"),
			border : false,
			region : 'west',
			width : 160,
			autoHeight : true,
			collapsible : true,
			split : true,
			rootVisible:false,
			useArrows:true,
			store:store
			
		});
		this.callParent(arguments);
	}
});
