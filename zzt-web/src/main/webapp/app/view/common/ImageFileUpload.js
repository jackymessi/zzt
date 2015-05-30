/**
 * 上传插件
 */
Ext.define('ZZT.view.common.ImageFileUpload', {
    alias: 'widget.imageFileUpload',
    extend: 'Ext.form.FormPanel',
    uploadFileLabel: '文件上传',
    uploadFileName: 'fileName',
    fileType: '',
    header: false,
    border: false,
    multiple: false,
    fileWidth: null,//控制label的宽度
    layout: 'column',
    pid:'',
    defaults: {
        margin: '0 0'
    },
    clear: function () {
        Ext.getCmp('previewContainer' + this.pid).removeAll();
        this.doLayout();
    },
    showImage: function(aUrl){
        var pcntId = 'previewContainer' + this.pid;
        for(var i = 0;i < aUrl.length;i += 1){
            if(aUrl[i] == ""){
                continue;
            }
            var url = "http://community-images.b0.upaiyun.com/" + aUrl[i];
            var imgId = 'img' + this.pid;
            this.pid += 1;
            var container = Ext.create("Ext.container.Container", {
                items: [],
                columnWidth: 0.2
            });
            var previewImg = Ext.create("Ext.Img",
                {
                    src: url + "!60",
                    height: 60,
                    autoEl: {
                        tag: "a",
                        href: url,
                        target: '_blank'
                    }
                });
            var urlHidden = Ext.create("Ext.form.field.Hidden", {
                name: this.uploadFileName,
                value: url,
                id: imgId
            });
            var deleteImg = Ext.create("Ext.Img", {
                src: "images/del_pic.ico",
                height: "16",
                listeners: {
                    el: {
                        click: function (mmm) {
                            Ext.getCmp(pcntId).remove(Ext.getCmp(mmm.getTarget(".x-container").id));
                        }
                    }
                }
            });
            container.items.add(previewImg);
            container.items.add(deleteImg);
            container.items.add(urlHidden);
            Ext.getCmp(pcntId).items.add(container);
            Ext.getCmp(pcntId).doLayout();
            this.doLayout();
        }
    },
    initComponent: function () {
        var pcntId = 'previewContainer' + this.pid;
        var me = this;
        this.items = [
            {
                xtype: 'filefield',
                name: 'uploadFile',
                id:'uploadFile',
                width: me.fileWidth,
                fieldLabel: "图片",
                border: false,
                buttonText: '',
                columnWidth: 1,
                buttonOnly: true,

                listeners: {
                    change: function () {
                        var form = this.up("form").getForm();
                        var fileName = Ext.getCmp('uploadFile').getValue().split('\\');
                        if(!checkFile(fileName[fileName.length - 1])){
                            return;
                        }
                        if(Ext.getCmp('uploadFile').getValue() == ''){
                            return;
                        }
                        if (form.isValid()) {
                            form.submit({
                                url: 'api/common/v1/upload?fileType=' + me.fileType,
                                //waitMsg : '正在上传...',
                                success: function (fp, o) {
                                    var imgId = 'img' + me.pid;
                                    me.pid += 1;
                                    var result = Ext.decode(o.response.responseText);
                                    var container = Ext.create("Ext.container.Container", {
                                        items: [],
                                        columnWidth: 0.2
                                    })
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
                                    var urlHidden = Ext.create("Ext.form.field.Hidden", {
                                        name: me.uploadFileName,
                                        value: result.url,
                                        id: imgId
                                    })
                                    var deleteImg = Ext.create("Ext.Img", {
                                        src: "images/del_pic.ico",
                                        height: "16",
                                        listeners: {
                                            el: {
                                                click: function (mmm) {
                                                    Ext.getCmp(pcntId).remove(Ext.getCmp(mmm.getTarget(".x-container").id));
                                                }
                                            }
                                        }
                                    });
                                    container.items.add(previewImg);
                                    container.items.add(deleteImg);
                                    container.items.add(urlHidden);
                                    Ext.getCmp(pcntId).items.add(container);
                                    Ext.getCmp(pcntId).doLayout();
                                    me.doLayout();
                                },
                                failure: function (fp, o) {
                                    alert(o.response.responseText);
                                    var result = Ext.decode(o.response.responseText);

                                    Ext.MessageBox.alert('错误', '上传失败！');
                                }
                            });
                        }

                    }
                }
            },
            {
                xtype: 'container',
                id: pcntId,
                columnWidth: 1,
                minHeight: 60,
                border: 10,
                layout: 'column',
                items: [
                ]
            }
        ];
        this.callParent(arguments);
    }

});

function checkFile(v) {
    //验证图片文件的正则
    var img_reg = /\.([jJ][pP][gG]){1}$|\.([jJ][pP][eE][gG]){1}$|\.([gG][iI][fF]){1}$|\.([pP][nN][gG]){1}$|\.([bB][mM][pP]){1}$/;
    if (!img_reg.test(v)) {
        Ext.Msg.alert('提示', '文件类型错误,请选择图片文件(jpe/jpeg/gif/png/bmp)');
        return false;
    }
    return true;
}