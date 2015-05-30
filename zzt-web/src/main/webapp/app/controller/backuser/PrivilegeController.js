Ext.define('SMS.controller.backuser.PrivilegeController', {
	extend : 'SMS.base.BaseController',
	requires : ['SMS.view.user.privilege.PrivilegeManager',
			'SMS.view.user.privilege.PrivilegeList',
			'SMS.base.BaseController'],
	refs : [{
				ref : 'privilegeList',
				selector : 'privilegeList'
			}, {
				ref : 'privilegeManager',
				selector : 'privilegeManager'
			}, {
				ref : 'privilegeWin',
				selector : 'privilegeWin'
			}, {
				ref : 'name',
				selector : '#scName'
			}]
			,
	init : function() {
		this.control({
					'privilegeList button[action=del]' : {
						click : this.del
					},
					'privilegeList button[action=add]' : {
						click : this.add
					},
					'privilegeList button[action=edit]' : {
						click : this.edit
					},
            'privilegeWin button[action=save]' : {
                click : this.save
            },
            'privilegeWin button[action=close]' : {
                click : this.close
            }
				});
	}
//	,
//	// 查询
//	search : function() {
//		var name = this.getName.getValue();
//		var store = this.getPrivilegeList().store;
//		store.load({
//					params : {
//						'name' : name
//					}
//				});
//	},
//	del : function() {
//
//	},
//	add : function() {
//
//	},
//	edit : function() {
//
//	},
//	save : function() {
//	}
});
