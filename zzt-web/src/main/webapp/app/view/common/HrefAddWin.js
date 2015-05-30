/**
 * 增加超链接的弹出窗口，主要用来在图文描述中，添加文字的超链接。
 */
Ext.define('ZZT.view.common.HrefAddWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.textAddWin',
    title: '添加链接',
    autoWidth: true,
    autoHeight: true,
    draggable: true,
    resizable: false,
    modal: true,// 背景变灰不可编辑
    layout: {
        type: 'vbox'
    },
    communityIds: "",
    padding: "10px",
    border: false,
    initComponent: function () {
        var me = this;
        me.items = [
            {
                xtype: 'form',
                border: false,
                layout: 'vbox',
                defaults: {
                    margin: '5'
                },
                items: [
                    {
                        xtype: 'combo',
                        fieldLabel: '广告类型',
                        forceSelection: true,
                        itemId: 'target',
                        editable: false,
                        name: 'target',
                        displayField: 'name',
                        valueField: 'value',
                        emptyText: '请选择广告类型',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['name', 'value'],
                            data: [
                                {value: 'SHOP_LIST', name: '周边商户列表 '},
                                {value: 'NOTIFICATION_DETAIL', name: '温馨提示/公告详情 '},
                                {value: 'CULTURE_ACTIVITY_DETAIL', name: '文化活动详情 '},
                                {value: 'SHOP_DETAIL', name: '商户详情 '},
                                {value: 'AD_COMMON', name: '通用广告，跳转到浏览器'},
                                {value: 'COMMON_PAGE', name: '广告内容（图片和文字） '},
                                {value: 'ITEM_DETAIL', name: '商品详情 '}
                            ],
                            autoLoad: true
                        }),
                        listeners: {
                            change: function () {
                                Ext.Ajax.request({
                                    url: 'api/other/v1/adslist',
                                    method: 'GET',
                                    params: {
                                        communityIds: me.communityIds,
                                        target: me.down("#target").getValue()
                                    },
                                    success: function (response) {
                                        me.down("#ads").removeAll();
                                        var adsList = Ext.decode(response.responseText);
                                        var items = [];
                                        adsList.forEach(function (ads) {
                                            items.push({
                                                boxLabel: ads.title,
                                                name: 'ads',
                                                inputValue: ads.title+"#"+ads.target
                                            })
                                        });
                                        if(items.length==0){
                                            me.down("#display").show();
                                            me.down("button[action=add]").setDisabled(true);
                                        }else{
                                            me.down("button[action=add]").setDisabled(false);
                                            me.down("#display").hide();
                                            me.down("#ads").add(items);
                                        }
                                    },
                                    fail: function () {
                                        Ext.MessageBox.alert("错误", "数据库请求失败，请按F5刷新试试！")
                                    }
                                })
                            }
                        }
                    },
                    {
                        xtype: 'displayfield',
                        itemId:'display',
                        fieldLabel:'提示',
                        margin:'0 0 0 5',
                        value:'选择的小区下，没有该类型的广告内容。',
                        hidden:true
                    },
                    {
                        xtype: 'radiogroup',
                        fieldLabel: '广告内容',
                        width: 500,
                        allowBlank: false,
                        msgTarget: 'side',
                        autoFitErrors: false,
                        columns: 2,
                        itemId: 'ads'
                    }
                ],
                buttons: [
                    {
                        text: '保 存',
                        action: 'add'
                    },
                    {
                        text: '取 消',
                        handler: function () {
                            me.close();
                        }
                    }
                ]
            }

        ];
        Ext.Ajax.request({
            url: 'api/other/v1/adslist',
            method: 'GET',
            params: {
                communityIds: me.communityIds
            },
            success: function (response) {
                me.down("#ads").removeAll();
                var adsList = Ext.decode(response.responseText);
                var items = [];
                adsList.forEach(function (ads) {
                    items.push({
                        boxLabel: ads.title,
                        name: 'ads',
                        inputValue: ads.title+"#"+ads.target
                    })
                });
                if(items.length==0){
                    var display=Ext.create("Ext.form.field.Display",{
                        margin:'5',
                        value:'选择的小区下，没有可选择的广告内容。'
                    })
                    me.down("form").hide();
                    me.items.add(display);
                    me.title="提示";
                }
                me.down("#ads").add(items);
            },

            fail: function () {
                Ext.MessageBox.alert("错误", "数据库请求失败，请按F5刷新试试！")
            }
        })
        me.callParent(arguments);
    }
});