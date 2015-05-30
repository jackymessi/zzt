/**
 * 角色controller
 */
 Ext.define('SMS.controller.backuser.RoleController', {
			extend : 'SMS.base.BaseController',
			requires : ['SMS.view.user.role.RoleList',
					'SMS.view.user.role.RoleWin'],
     refs : [{
         ref : 'roleList',
         selector : 'roleList'
     }, {
         ref : 'roleWin',
         selector : 'roleWin'
     }, {
         ref : 'name',
         selector : '#scName'
     }]
     ,
     init : function() {
//		debugger;
         this.control({
             'roleList button[action=del]' : {
                 click : this.del
             },
             'roleList button[action=add]' : {
                 click : this.add
             },
             'roleList button[action=edit]' : {
                 click : this.edit
             },
             'roleWin button[action=save]' : {
                 click : this.save
             },
             'roleWin button[action=close]' : {
                 click : this.close
             }
         });
     }
		});
