Ext.define('ZZT.view.common.ImageAddWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.imageAddWin',
    title: '添加图片',
    autoWidth: true,
    autoHeight: true,
    draggable: true,
    resizable: false,
    modal: true,// 背景变灰不可编辑
    layout: {
        type: 'vbox'
    },
    padding: "10px",
    closeAction: 'destroy',
    border: false,
    initComponent: function () {
        var me = this;
        me.items = [
            {
                xtype: 'form',
                border: false,
                layout: 'column',
                defaults: {
                    margin: '5'
                },
                items: [
                    {
                        xtype: 'filefield',
                        name: 'uploadFile',
                        allowBlank: false,
                        fieldLabel: '图片',
                        buttonText: '选择'
                    }
                ],
                buttons: [
                    {
                        text: '增 加',
                        action: 'add'
//                        handler:function(){
//                            me.down('form').getForm().submit();
//                        }
                    },
                    {
                        text: '取 消',
                        handler: function () {
                            me.close();
                        }
                    }
                ]
            }

        ]
        me.callParent(arguments);
    }
});