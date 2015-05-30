Ext.define('SMS.view.user.menu.MenuList', {
			extend : 'SMS.base.BaseList',
			alias : 'widget.menuList',
			requires : ['SMS.store.backuser.Menu','SMS.view.user.menu.MenuWin'],
			store : Ext.create('SMS.store.backuser.Menu'),
			popWin: null,
			popWinName:'SMS.view.user.menu.MenuWin',
			frame : true,
			columnLines : true,
    forceFit : true,
			initComponent : function() {
				var me = this;
				me.columns = [{
							header : '菜单名',
							dataIndex : 'text',
                    minWidth: 150
						}, {
							header : 'view',
							dataIndex : 'nodeId',
                    minWidth: 150
						}, {
							header : 'controller',
							dataIndex : 'qtitle',
                    minWidth: 150
						}, {
							header : '级数',
							dataIndex : 'level'
						}];
				//翻页组件
//				this.dockedItems = [{
//		        xtype: 'pagingtoolbar',
//		        store: this.store,  
//		        dock: 'bottom',
//		        displayInfo: true
//		    	}];
                me.dockedItems = [
                    {
                        xtype: 'toolbar',
                        items: [
                            {
                                xtype:'button',
                                id:'menu-mod',
                                text:'修改',
                                action:'edit'
                            },
                            {
                                xtype:'button',
                                text:'删除',
                                id:'menu-del',
                                action:'delete'
                            }]}
                ];
				me.callParent(arguments);
			}
		});
