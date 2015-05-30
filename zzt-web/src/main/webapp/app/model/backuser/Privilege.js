Ext.define('SMS.model.backuser.Privilege', {
			extend : 'Ext.data.Model',
			fields : ['id', 'accessUrl', 'code', 'description', 'httpMethod',
					'name','menu','icon','buttonName','menuId','menuText', 'actionName','version'],
			idProperty : 'id',
			proxy : {
				type : 'rest',
				url : 'api/privilege/v1/privileges',
                limitParam:'rows',
				reader : {
					type : 'json',
					root : 'data',
					totalProperty : 'count'
				}
			}
		});