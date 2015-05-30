Ext.define('SMS.controller.Menu', {
	extend : 'Ext.app.Controller',
    id:'_menuController',
	refs : [{
		ref : 'sss',
		selector : 'smsmenu'
	},{
		ref : 'tabPanel',
		selector : 'smstablepanel'
	}],
	init : function() {
		this.control({
			'smsmenu' : {
				itemclick : this.loadMenu
			}
		});
	},
	loadMenu : function(view, record) {
		var id = record.get('id');
		if (record.get('leaf')) {
			var panel = Ext.getCmp(id);
			if (!panel) {
				Ext.getApplication().loadController("SMS.controller."+record.get('qtitle'));
				panel = Ext.create('SMS.view.'+id,{
					title : record.get('text'),
                    iconCls: 'home',
                    closable: true,
                    id : id
				});
				this.openTab(panel, id);
			} else {
				var main = Ext.getCmp("content-panel");
				main.setActiveTab(panel);
			}
		}
	},
    clickMenu:function(panelId,panelText,controllerName){
        var panel = Ext.getCmp(panelId);
        if (!panel) {
            Ext.getApplication().loadController(controllerName);
            panel = Ext.create('SMS.view.'+panelId,{
                title : panelText,
                closable: true,
                id : panelId
            });
            this.openTab(panel, panelId);
        } else {
            var main = Ext.getCmp("content-panel");
            main.setActiveTab(panel);
        }
    },
	openTab : function(panel, id) {
		var o = (typeof panel == "string" ? panel : id || panel.id);
		var main = Ext.getCmp("content-panel");
		var tab = main.getComponent(o);
		if (tab) {
			main.setActiveTab(tab);
		} else if (typeof panel != "string") {
			panel.id = o;
			var p = main.add(panel);
			main.setActiveTab(p);
		}
	}
});
