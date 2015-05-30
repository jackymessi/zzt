Ext.define('SMS.model.backuser.Privilege2', {
			extend : 'SMS.model.backuser.Privilege',
			proxy : {
				type : 'rest',
				url : 'api/privilege/v1/privileges',
				reader : {
					type : 'json',
					root : 'data'
				}
			}
		});