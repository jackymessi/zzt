Ext.define('SMS.view.user.menu.MenuManager', {
    extend: 'SMS.base.BaseManager',
    alias: 'widget.menuManager',
    requires: ['SMS.view.user.menu.MenuList'],
	border : false,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function () {
    	var me = this;
    	
   	        me.items = [{
        	 xtype: 'menuList',
             forceFit : true,
            flex: 1
        }];
        me.callParent(arguments);
    }
});