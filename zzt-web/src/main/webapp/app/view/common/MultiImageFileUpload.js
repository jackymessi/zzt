/**
 * 定义通用的图片上传组件
 *
 */
Ext.define('ZZT.view.common.MultiImageFileUpload', {
    alias: 'widget.multiImageFileUpload',
    extend: 'Ext.form.FormPanel',
    uploadFileName: 'fileName',
    multiple: false,
    layout: 'column',
    clear: function () {
        var me = this;
        me.up("form").down("hidden").setValue('');
        me.up("form").down('filefield').setVisible(true);
        me.up("form").down("imageFileUpload").setVisible(true);
        me.up("form").down("button[name=detail]").setVisible(false);
        me.up("form").down("button[name=delete]").setVisible(false);
    },
    initComponent: function () {
        var me = this;
        this.items = [
            {
                xtype:'label',
                text:"图片",
                columnWidth:0.1
            },
            {
                xtype: 'filefield',
                name: 'uploadFile',
                columnWidth: 0.1,
                buttonText: '',
                buttonConfig: {
                    cls: "add_pic",
                    width: 60,
                    height: 60
                },
                buttonOnly: true,

                listeners: {
                    change: function () {
                        var form = me.up("form").getForm();
                        if (form.isValid()) {
                            form.submit({
                                url: 'api/common/v1/upload?fileType=notificationPic',
                                //waitMsg : '正在上传...',
                                success: function (fp, o) {
                                    var result = Ext
                                        .decode(o.response.responseText);

//                                me.up("form").down("hidden")
//                                        .setValue(result.name);
                                    var previewImg = Ext.create("Ext.Img",
                                        {
                                            src: result.url + "!60",
                                            height: 60,
                                            autoEl: {
                                                tag: "a",
                                                href: result.url,
                                                target: '_blank'
                                            }
                                        });
                                    var delImg = Ext.create("Ext.Img",
                                        {
                                            src: "images/del_pic.ico",
                                            height: 15
                                        });
                                    var containerItems = Ext.getCmp('previewContainer').items;
                                    containerItems.add(previewImg);
                                    containerItems.add(delImg);
                                    me.doLayout();


//                                    me.up("form").insert(1, previewImg);
//                                    me.up("form").doLayout();
//                                var  previewImg=me.up("form").down("image");
//                                previewImg.setSrc(result.url+"!60");
//                                previewImg.getEl().dom.href=result.url;
//                                previewImg.setVisible(true);
//                                me.el.down('.x-form-item-body').setVisibilityMode(Ext.Element.DISPLAY);
//                                me.el.down('.x-form-item-body').hide();
//                                me.up("form").down("button[name=delete]")
//                                        .setVisible(true);
//                                if(me.multiple){
//                                    var addBtn = Ext.create("")
//                                }
                                },
                                failure: function () {
                                    Ext.MessageBox.alert('错误', '上传失败！');
                                }
                            });
                        }

                    }
                }
            },
            {
                xtype: "container",
                layout: "column",
                id: 'previewContainer',
                items: []
            }
        ];
        this.callParent(arguments);
    }

});