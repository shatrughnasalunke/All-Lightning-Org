({
	handleComponentEvent : function(component, event, helper) {
		console.log('inside parent component');
        var getParam=event.getParam('storedContactEvent');
        console.log('get param value-->',getParam)
        component.set('v.getValue',getParam);
	}
})