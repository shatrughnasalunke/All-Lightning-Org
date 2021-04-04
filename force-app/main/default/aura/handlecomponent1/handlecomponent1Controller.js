({
	handleApplicationEvent1 : function(component, event, helper) {
		var getParam=event.getParam('message');
        component.set('v.getValuefor',getParam);
	}
})