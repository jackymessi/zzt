Ext.define('SMS.model.backuser.Role', {
			extend : 'Ext.data.Model',
			fields : ['id', 'name', 'description','privilegeIds','version'],
			idProperty : 'id',
			proxy : {
				type : 'rest',
				url : 'api/role/v1/roles',
				reader : {
					type : 'json',
					root : 'data',
					totalProperty : 'count'
				}
			}
		});