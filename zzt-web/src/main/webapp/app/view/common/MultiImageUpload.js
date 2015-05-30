/**
 * 定义通用的图片上传组件
 *
 */
Ext.define('ZZT.view.common.MultiImageUpload', {
    alias : 'widget.multiImageUpload',
    extend : 'Ext.form.FormPanel',
    uploadFileLabel : '图片',
    uploadFileName : 'fileName',
    fileType:'',
    header : false,
    border : false,
    fileWidth : null,//控制label的宽度
    layout:'column',
    defaults:{
        margin:'0 0'
    },
    clear : function() {
        var me = this;
        me.up("form").down("hidden").setValue('');
        me.up("form").down('filefield').setVisible(true);
        me.up("form").down("imageFileUpload").setVisible(true);
        me.up("form").down("button[name=detail]").setVisible(false);
        me.up("form").down("button[name=delete]").setVisible(false);
    },
    initComponent : function() {
        var me = this;
        this.items = [{
            fieldLabel : me.uploadFileLabel,
            xtype : 'filefield',
            name : 'uploadFile',
            width : me.fileWidth,
            height:60,
            border:false,
            buttonText:'',
            buttonConfig: {
                cls:"camera",
                width:60,
                height:60
            },
            buttonOnly:true,

            listeners : {
                change : function() {
                    var me = this;
                    var form = me.up("form").getForm();
                    if (form.isValid()) {
                        form.submit({
                            url : 'api/common/v1/upload?fileType='+me.fileType,
                            //waitMsg : '正在上传...',
                            success : function(fp, o) {
                                var result = Ext
                                    .decode(o.response.responseText);
                                me.up("form").down("hidden")
                                    .setValue(result.name);
                                var  previewImg=me.up("form").down("image");
                                previewImg.setSrc(result.url+"!60");
                                previewImg.setVisible(true);
                                me.el.down('.x-form-item-body').setVisibilityMode(Ext.Element.DISPLAY);
                                me.el.down('.x-form-item-body').hide();
                                me.up("form").down("button[name=delete]")
                                    .setVisible(true);
                            },
                            failure : function() {
                                Ext.MessageBox.alert('错误', '上传失败！');
                            }
                        });
                    }

                }
            }
        }, {
            xtype : 'hidden',
            width : 1,
            name : me.uploadFileName
        }, {
            xtype : 'image',
            width : 50,
            name: 'previewImg',
            hidden:true,
            listeners : {
                click : function() {
                    var me = this;
                    //创建一个ImageWindow，显示该图片
                    //if(!me.imageWin){
                    var imageWin=Ext.create('SMS.view.common.ImagePreviewWin',{
                        imageSrc:me.imageSrc
                    });

                    //	}
                    imageWin.show();
                }
            }

        }, {
            xtype : 'button',
            name:'delete',
            width : 25,
            iconCls : 'Delete',
            hidden : true,
            listeners : {
                click : function() {
                    var me = this;
                    me.up("form").down('hidden').setValue('');
                    me.up("form").down('filefield').setVisible(true);
                    var detail=me.up("form").down('image');
                    detail.setVisible(false);
                    me.setVisible(false);
                }
            }

        }];
        this.callParent(arguments);
    }

});