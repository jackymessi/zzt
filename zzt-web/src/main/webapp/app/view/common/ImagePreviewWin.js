Ext.define('ZZT.view.common.ImagePreviewWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.imagePreviewWin',
	header : true,
	//默认的-最小窗口
	height:200,
	width:300,
	closeAction:'hide',
	maximized : false,
	draggable : true,
	resizable : true,
	modal:true,
	layout:'fit',
	//需要配置的
	imageSrc:'defaultUrl',
	initComponent : function() {
		var me = this;
		var w=Ext.getBody().getWidth();
		var h=Ext.getBody().getHeight();
    	var img=Ext.create('Ext.Img',{
			src:me.imageSrc,
			renderTo :Ext.getBody()
		});
		img.show();
		var iw=img.getWidth()+30,ih=img.getHeight()+60;
		Ext.apply(me,{
			x:0.4*w,
			y:0.2*h
		});
		me.items=[
			img
		];
		me.on('beforeshow',function(){
			if(iw>300&&ih>200){
				me.setWidth(iw);
				me.setHeight(ih);
			}
		});
		me.callParent(arguments);
	}
});