Ext.define('ZZT.view.common.KHtmlEditor', {
    extend: 'Ext.form.HtmlEditor',
    requires: ["SMS.view.common.ImageFileUpload"],
    alias: 'widget.htmlEditor',
    enableAlignments: false,
    enableColors: false,
    enableFont: false,
    enableFontSize: false,
    enableFormat: false,
    enableLinks: false,
    enableLists: false,
    enableSourceEdit: false,
    initComponent: function () {
        this.callParent(arguments);
    },
    createToolbar: function () {
        var me = this;
        me.callParent(arguments);
        me.toolbar.insert(1, {
            xtype: 'button',
            icon: 'images/edit.png',
            handler: function(){this.addImage();},
            scope: this
        });
        me.toolbar.insert(2, {
            xtype: 'label',
            text:'点击选择上传要插入的图片'
        });
        return me.toolbar;
    },
    addImage : function() {
        var editor = this;
        var imgform = new Ext.FormPanel({
            region : 'center',
            defaults: {
                margin: '15'
            },
            items : [
                {
                    id: 'imgwidth',
                    xtype: 'textfield',
                    allowBlank: false,
                    fieldLabel: '长'
                },
                {
                    id: 'imgheight',
                    xtype: 'textfield',
                    allowBlank: false,
                    fieldLabel: '高'
                },
                {
                xtype: 'imageFileUpload',
                allowBlank: false,
                uploadFileLabel: '图片',
                uploadFileName: 'cntpic',
                fileType: 'notificationPic',
                pid:1
            }],
            buttons : [{
                text : '使用',
                handler : function() {
                    var element = document.createElement("img");
                    element.src = Ext.getCmp('img1').getValue() + "!300";
                    if(Ext.getCmp('imgwidth').getValue().trim() != '' && Ext.getCmp('imgheight').getValue().trim() != ''){
                        element.width = Ext.getCmp('imgwidth').getValue();
                        element.height = Ext.getCmp('imgheight').getValue();
                    }
                    var isIE11 = window.location.hash = !!window.MSInputMethodContext;
                    if (isIE11 || Ext.isIE) {
                        editor.insertAtCursor(element.outerHTML);
                    } else {
                        var selection = editor.win.getSelection();
                        if (!selection.isCollapsed) {
                            selection.deleteFromDocument();
                        }
                        selection.getRangeAt(0).insertNode(element);
                    }
                    win.close();
                }
            }, {
                text : '关闭',
                handler : function() {
                    win.close();
                }
            }]
        })
        var win = new Ext.Window({
            title : "插入图片",
            width : 300,
            modal : true,
            border : false,
            layout : "fit",
            items : imgform

        });
        win.show();
    }
});