 Ext.define('SMS.controller.backuser.UserController', {
			extend : 'SMS.base.BaseController',
			requires : ['SMS.view.user.UserList',
					'SMS.view.user.UserWin'],
     refs : [{
         ref : 'userList',
         selector : 'userList'
     },  {
         ref : 'userWin',
         selector : 'userWin'
     }]
     ,
     init : function() {
//		debugger;
         this.control({
             'userList button[action=del]' : {
                 click : this.del
             },
             'userList button[action=add]' : {
                 click : this.add
             },
             'userList button[action=edit]' : {
                 click : this.edit
             },
             'userWin button[action=save]' : {
                 click : this.save
             },
             'userWin button[action=close]' : {
                 click : this.close
             }
         });
		}}
 );