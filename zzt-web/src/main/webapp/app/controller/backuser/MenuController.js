Ext.define('SMS.controller.backuser.MenuController', {
			extend : 'SMS.base.BaseController',
			requires : ['SMS.view.user.menu.MenuList',
					'SMS.view.user.menu.MenuWin'],
    refs: [
        {
            ref: 'menuList',
            selector: 'menuList'
        },
        {
            ref: 'menuWin',
            selector: 'menuWin'
        }
    ],
    init: function () {
        this.control({
            'menuList button[action=edit]': {
                click: this.edit
            },
            'menuList button[action=delete]': {
                click: this.del
            },
            'menuWin button[action=save]': {
                click: this.save
            },
            'menuWin button[action=close]': {
                click: this.close
            }
        });
    }
		});
