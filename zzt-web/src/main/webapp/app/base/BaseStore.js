Ext.define('ZZT.base.BaseStore', {
			extend : 'Ext.data.Store',
    proxy: {
        type: 'rest',
        url: 'api/backuser/v1/notallow',
        reader: {
            type: 'json',
            root: 'root'
        }
    },
    fields: ['id'],
    autoLoad : true,
    autoSync : false
		});