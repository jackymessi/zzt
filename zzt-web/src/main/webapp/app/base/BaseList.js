Ext.define('ZZT.base.BaseList', {
	extend : 'Ext.grid.Panel',
	
	
	/**
	 * baseController使用
	 * @type 
	 */	
	popWin:null,
	viewConfig: {
		 enableTextSelection: true//控制文字可选
		    },
	initComponent : function() {
//		//往toolbar追加items
//		var toolBar	=[{
//						text : '新增',
//						iconCls : 'Add',
//						action : 'add'
//					}, '-', {
//						text : '编辑',
//						iconCls : 'Edit',
//						action : 'edit'
//					}, '-', {
//						text : '删除',
//						iconCls : 'Delete',
//						action : 'del'
//			 }];
//		if(this.addToolbarItems){
//			for(key in this.addToolbarItems){
//				toolBar.push(this.addToolbarItems[key]);
//			}
//		}
//		//往dockedItems追加items
//		var dockedItems= [{
//				xtype : 'toolbar',
//				items : toolBar
//			}];
//		if(this.addDockedItems){
//			for(key2 in this.addDockedItems){
//				dockedItems.push(this.addDockedItems[key2]);
//			}
//		}
		//默认属性
		Ext.applyIf(this,{
			frame : true,
			columnLines : true,
//			forceFit : true,//添加后列表混乱
			scroll : true,
		//	dockedItems:dockedItems,
			bbar:Ext.create('Ext.PagingToolbar', {
				store : this.store,
				displayInfo : true,
				displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
				emptyMsg : "没有数据"
			})
		});
		this.callParent(arguments);
	}
});