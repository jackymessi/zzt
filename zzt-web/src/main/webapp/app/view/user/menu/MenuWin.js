Ext.define('SMS.view.user.menu.MenuWin', {
    extend: 'Ext.window.Window',
    requires: ['SMS.model.backuser.Menu'],
    alias: 'widget.menuWin',
    modelName: 'SMS.model.backuser.Menu',
    list: null,
    title: '菜单',
    height: 300,
    width: 400,
    maximized: false,
    draggable: true,
    closeAction: 'hide',
    resizable: true,
    initComponent: function () {
        var me = this;
        me.items = [
            {
                xtype: 'form',
                layout: 'column',
                border: false,
                items: [
                    {
                        flex: 1,
                        xtype: 'fieldcontainer',
                        layout: 'vbox',
                        defaults: {
                            flex: 1,
                            margin: '5 20 5 10 ',
                            xtype: 'textfield',
                            width: 300
                        },
                        items: [
                            {
                                name: 'text',
                                fieldLabel: '菜单名',
                                allowBlank: false
                            },
                            {
                                name: 'nodeId',
                                fieldLabel: 'view'
                            },
                            {
                                name: 'qtitle',
                                fieldLabel: 'controller'
                            },
                            {
                                name: 'level',
                                fieldLabel: '级数',
                                editable: false,
                                xtype: 'combobox',
                                store: [1, 2, 3],
                                listeners: {
                                    change: function (me, newValue, oldValue, eOpts) {
                                        var parentIdCombo = me
                                            .up('form')
                                            .down('combobox[name=parentId]');
                                        if (newValue > 1) {
                                            parentIdCombo.store.load({
                                                params: {
                                                    level: newValue
                                                        - 1
                                                }
                                            });
                                        } else {
                                            parentIdCombo.store.removeAll();
                                        }

                                    }
                                }

                            },
                            {
                                xtype: 'fieldcontainer',
                                fieldLabel: '是否功能菜单',
                                defaultType: 'radiofield', // 定义为radiofield
                                defaults: {
                                    flex: 1
                                },
                                layout: 'hbox',
                                items: [
                                    {
                                        boxLabel: '是',
                                        name: 'isLeaf',
                                        inputValue: '1',
                                        checked: true
                                    },
                                    {
                                        boxLabel: '否',
                                        name: 'isLeaf',
                                        inputValue: '0'
                                    }
                                ]
                            },
                            {
                                name: 'parentId',
                                xtype: 'combobox',
                                fieldLabel: '父菜单',
                                displayField: 'text',
                                valueField: 'id',
                                editable: false,
                                forceSelection: true,
                                queryMode: 'local',
                                store: Ext.create('SMS.store.backuser.Menu',
                                    {
                                        autoLoad: false
                                    })
                            }
                        ]
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'id'
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'version'
                    }
                ]
            }
        ];
        // Reset and Submit buttons
        me.buttons = [
            {
                text: '保存',
                action: 'save'
            },
            {
                text: '关闭',
                action: 'close'
            }
        ];
        me.callParent(arguments);
    }
});