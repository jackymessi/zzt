Ext.define('ZZT.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    requires: ['ZZT.view.ComplaintPanel', 'ZZT.view.RepairingServicePanel','Ext.ux.TabCloseMenu'],
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            id: 'content-panel',
            region: 'center',
            layout:'fit',
            defaults: {
                autoScroll: true
            },
            activeTab: 0,
            border: false,
            items: [
                {
                    title: '首页',
                    border: false,
                    iconCls: 'home',
                    xtype: 'container',
                    itemId: 'home',
                    padding: "20px",
                    items: [
//                        {
//                            xtype: 'complaintPanel'
//                        },
//                        {
//                            xtype: 'repairingServicePanel'
//                        }
                    ]
                }
            ],
            plugins: Ext.create('Ext.ux.TabCloseMenu', {
                closeTabText: '关闭',
                closeOthersTabsText: '关闭其他标签',
                closeAllTabsText: '关闭所有标签'
            })
        });
        this.callParent(arguments);
    },
    listeners: {
        afterrender: function () {
            var me = this;
            if (Ext.util.Cookies.get("communityName")) {
                me.down("#home").add({
                    xtype: 'complaintPanel'
                });
                me.down("#home").add({
                    xtype: 'repairingServicePanel'
                });
            }
        }
    }
});
