Ext.define('SMS.store.backuser.BackuserStore', {
			extend : 'Ext.data.Store',
			requires : 'SMS.model.backuser.Backuser',
			model : 'SMS.model.backuser.Backuser',
			remoteSort : true,
			autoLoad : true,
			autoSync : false
		});