/**
 * 增加文字的弹出窗口，主要用来在图文描述中，添加文字。
 */
Ext.define('ZZT.view.common.TextAddWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.textAddWin',
    title: '添加文字',
    autoWidth: true,
    autoHeight: true,
    draggable: true,
    resizable: false,
    modal: true,// 背景变灰不可编辑
    layout: {
        type: 'vbox'
    },
    padding: "10px",
    closeAction:'destroy',
    border: false,
    initComponent: function () {
        var me = this;
        me.items = [
            {
                xtype: 'form',
                id:'aaaaaabbbbbbbbbbb',
                name:'ccccccccddddddddddd',
                border: false,
                layout: 'column',
                defaults: {
                    margin: '5'
                },
                items: [
                    {
                        xtype: 'textareafield',
                        rows: 4,
                        allowBlank: false,
                        fieldLabel: '文字',
                        width: 500
                    }
                ],
                buttons: [
                    {
                        text: '增 加',
                        action:'add'
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