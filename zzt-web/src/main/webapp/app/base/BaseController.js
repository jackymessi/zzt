Ext.define('ZZT.base.BaseController', {
    extend: 'Ext.app.Controller',
    setFormFieldsAllReadOnly: function (form) {
        form.getFields().each(function (field) {
            field.setReadOnly(true);
            // field.fieldCls = 'readonly_style';
        });
    },
    cancelFormFieldsAllReadOnly: function (form) {
        form.getFields().each(function (field) {
            field.setReadOnly(false);
            // field.removeCls('readonly_style');
        });
    },
    setFieldReadOnly: function (form, name) {
        var field = form.findField(name);
        field.setReadOnly(true);
        // field.fieldCls = 'readonly_style';
    },
    setFieldNotReadOnly: function (form, name) {
        var field = form.findField(name);
        field.setReadOnly(false);
        // field.removeCls('readonly_style');
    },
    getGridSelData: function (grid) {
        var data = grid.getSelectionModel().getSelection()[0];
        if (data)
            return data;
        else {
            Ext.Msg.alert('提示', '请选中一条记录!');
            return false;
        }
    },
    // 多个name以英文逗号分割
    showBtns: function (grid, names) {
        if (names.indexOf(',') == -1) {
            this.showBtn(grid, names);
        } else {
            var nameArr = names.split(',');
            for (var i = 0; i < nameArr.length; i++) {
                this.showBtn(grid, nameArr[i]);
            }
        }
    },
    showBtn: function (grid, name) {
        var btnStr = 'toolbar button[action=' + name + ']';
        var btn = grid.query(btnStr)[0];
        btn.show();
        var sepStr = 'toolbar tbseparator[action=' + name + ']';
        var sep = grid.query(sepStr)[0];
        if (sep) {
            sep.show();
        }
    },
    // 多个name以英文逗号分割
    hideBtns: function (grid, names) {
        if (names.indexOf(',') == -1) {
            this.hideBtn(grid, names);
        } else {
            var nameArr = names.split(',');
            for (var i = 0; i < nameArr.length; i++) {
                this.hideBtn(grid, nameArr[i]);
            }
        }
    },
    hideBtn: function (grid, name) {
        var btnStr = 'toolbar button[action=' + name + ']';
        var btn = grid.query(btnStr)[0];
        btn.hide();
        var sepStr = 'toolbar tbseparator[action=' + name + ']';
        var sep = grid.query(sepStr)[0];
        if (sep) {
            sep.hide();
        }
    },
    showWindowBtns: function (win, names) {
        var selector = '';
        if (names.indexOf(',') == -1) {
            selector = 'button[action=' + names + ']';
            win.query(selector)[0].show();
        } else {
            var nameArr = names.split(',');
            for (var i = 0; i < nameArr.length; i++) {
                selector = 'button[action=' + nameArr[i] + ']';
                win.query(selector)[0].show();
            }
        }
    },
    hideWindowBtns: function (win, names) {
        var selector = '';
        if (names.indexOf(',') == -1) {
            selector = 'button[action=' + names + ']';
            win.query(selector)[0].hide();
        } else {
            var nameArr = names.split(',');
            for (var i = 0; i < nameArr.length; i++) {
                selector = 'button[action=' + nameArr[i] + ']';
                var btn = win.query(selector)[0];
                btn.hide();
            }
        }
    },
    search: function (button) {
        var form = button.up('form');
        var grid = button.up('panel').up('panel').down('grid');
        if (!grid) {
            grid = button.up('panel').up('panel').up('panel').down('grid');
        }
        var store = grid.store;
        if (form) {
            store.on('beforeload', function (store, options) {
                store.proxy.extraParams = {};
                Ext.apply(store.proxy.extraParams, form.getValues());
            });
        }
        store.loadPage(1);
    },
    del: function (button) {
        var me = this;
        var list = button.up("grid");
        var record = me.getGridSelData(list);
        if (!record) {
            return;
        }
        Ext.Msg.confirm('确认', '您确定要删除这条记录吗？', function (btn) {
            if (btn == 'yes') {
                record.destroy({
                    success: function (a, operation, c) {
                        Ext.Msg.alert('提示', '删除成功！');
                        list.store.reload();
                    },
                    failure: function (records, option) {
                        Ext.Msg.alert('提示', '删除失败-' + option.request.scope.reader.jsonData.message);
                    }
                });
            }
        })
    },
    add: function (button) {
        var list = button.up("grid");
            list.popWin = Ext.create(list.popWinName, {
                list: list
            });
        var form = list.popWin.down('form').getForm();
        form.reset(true);
        list.popWin.show();
    },
    edit: function (button) {
        var list = button.up("grid");
            list.popWin = Ext.create(list.popWinName, {
                list: list
            });
        var record = this.getGridSelData(list);
        if (record) {
            var form = list.popWin.down('form').getForm();
            form.loadRecord(record);
            list.popWin.show();

        }
    },
    save: function (button,store) {
        var myMask = new Ext.LoadMask(document.body, {msg: '正在保存中，请稍候...'});
        var win = button.up('window');
        var form = win.down('form').getForm();
        //修改个人信息时需要刷新页面
        var flag = false;
        if (form.isValid()) {
            var idField = form.findField('tid'), model;
            if (!idField || idField.getValue() == '') {
                model = Ext.create(win.modelName);
            } else {
                model = Ext.create(win.modelName);
                model.setId(idField.getValue());
                if (win.id == 'infoEditWin') {
                    flag = true;
                }

            }
            myMask.show();
            model.beginEdit();
            model.set(form.getValues());
            model.save({
                success: function (records, option) {
//								button.getEl().unmask();
                    myMask.hide();
                    if (flag) {
                        flag = false;
                        document.location.reload();
                    } else if (store && (store instanceof Ext.data.AbstractStore)) {
                        store.reload()
                    } else if(win.list) {
                        win.list.store.reload();
                    }
                    Ext.Msg.alert('提示', '保存成功！');
                    if(win.closeAction==="destroy"){
                        win.close();
                    }else{
                        win.hide();
                    }
                },
                failure: function (records, option) {
//								button.getEl().unmask();
                    myMask.hide();
                    Ext.Msg.alert('提示', '保存失败-' + option.request.scope.reader.jsonData.message);
                }
            });
            model.endEdit();


        }

    },
    close: function (button) {
        var win = button.up('window');
        if(win.closeAction==="destroy"){
            win.close();
        }else{
            win.hide();
        }
    }
});
