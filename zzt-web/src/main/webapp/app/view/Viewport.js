Ext.define('ZZT.view.Viewport',{
    extend: 'Ext.container.Viewport', 
    layout: 'fit', 
    hideBorders: true, 
    requires : [
        'ZZT.view.Header', 
        'ZZT.view.Menu',
        'ZZT.view.TabPanel'

    ], 
    initComponent : function(){ 
        var me = this; 
        Ext.apply(me, { 
            items: [{ 
                id:'desk', 
                layout: 'border', 
                items: [ 
                    Ext.create('ZZT.view.Header'),
                    Ext.create('ZZT.view.Menu'),
                    Ext.create('ZZT.view.TabPanel')
                ] 
            }] 
        }); 
        me.callParent(arguments); 
    } 
});
