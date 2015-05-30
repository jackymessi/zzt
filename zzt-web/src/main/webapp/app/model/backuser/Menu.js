Ext.define('SMS.model.backuser.Menu', {
			extend : 'Ext.data.Model',
			fields : [{
						name : 'id',
						type : 'integer',
						useNull :true
					}, {
						name : 'text',
						type : 'string'
					}, {
						name : 'nodeId',
						type : 'string'
					}, {
						name : 'qtitle',
						type : 'string'
					}, {
						name : 'leaf',
						type : 'boolean'
					}, {
						name : 'level',
						type : 'int'
					}, {
						name : 'parentId',
						type : 'int'
					}, {
						name : 'version',
						type : 'int'
					}, {
                name : 'isLeaf',
                type : 'int'
            }],
			idProperty : 'id',
			proxy : {
				type : 'rest',
				url : 'api/menu/v1/menus',
                limitParam:'rows',
				reader : {
					type : 'json',
					root : 'data',
					totalProperty : 'count'
				}
			}
		});