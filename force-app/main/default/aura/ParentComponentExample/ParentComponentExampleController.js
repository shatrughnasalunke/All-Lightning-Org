({
	doHandle : function(component, event, helper) {
        var getvalue=event.getParam("message");
        console.log('getvalue--->',getvalue);
        component.set('v.getValue',getvalue);
        var totalvalue=parseInt(component.get('v.Number'))+1;
        console.log('totalvalue--->',totalvalue);
        component.set('v.Number',totalvalue);
	}
})