Ext.define('SMS.model.backuser.Backuser', {
			extend : 'Ext.data.Model',
			requires: ["SMS.model.Community"],
			fields : [{
						name : 'tid',
						type : 'int'
					}, {
						name : 'loginName',
						type : 'string'
					},
            'pId','communityId','roleIds',
            'communityName','roleName',{name: 'createTime',  type: 'date',
                    convert:function(v){
                        if(v==null || v==''){
                            return null;
                        }
                        return new Date(v);
                    }}],
			associations: { type: 'hasOne', model: 'SMS.model.Community',name:'community' },
			idProperty : 'tid',
			proxy : {
				type : 'rest',
				headers : {
					'Accept' : "application/json"
				},
				url : 'api/backuser/v1/users',
				limitParam : 'rows',
				reader : {
					type : 'json',
					root : 'data',
					totalProperty : 'count'
				}
			}
		});