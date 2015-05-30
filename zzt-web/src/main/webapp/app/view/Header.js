Ext.define('ZZT.view.Header', {
    layout: {
        type: 'hbox',       // Arrange child items vertically
        align: 'middle',    // Each takes up full width
        padding: 5
    },
    extend: 'Ext.panel.Panel',
    height: 35,
    region: 'north',
    bodyStyle: "background-image:url(images/header.jpg) !important;background-color:transparent;",
    //bodyStyle:'background-color:#07507F',
    initComponent: function () {
        var me = this;
        me.items = [
            {
                xtype: 'container',
                flex: 10
            },
            {
                html:"<div style='background-color: rgb(2,125,203);color:white'>欢迎您，</div>"
            },
            {
                xtype:'box',
                isFormField: true,
                style: "background-color: rgb(2,125,203);",
                margin:'0 6 0 0',
                autoEl:{
                    //html: '&nbsp;<a href>Link To Prospect</a>'
                    tag: 'a',
                    href: '#',
                    cn: Ext.util.Cookies.get("loginName")
                },
                listeners: {
                    render: function(component) {
                        component.getEl().on('click', function(e) {
                            var win = Ext.create('SMS.view.user.UserPasswordWin');
                            win.show();
                        });
                    }
                }
            },
            {
                xtype: 'button',
                iconCls: 'user_logout',
                flex: 1,
                text: '退出登录',
                handler: function () {

                    Ext.Ajax.request({
                        method: 'POST',
                        url : 'api/backuser/v1/loginout',
                        success: function (response, options) {
                            window.location.href = 'login.html';
                        }
                    });
                }
            }
        ];
        me.callParent(arguments);
    }
});