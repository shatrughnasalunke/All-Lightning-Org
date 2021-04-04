({
	eventHandler : function(component, event, helper) {
		var cmpevent=event.getParam('contacteventattribute');
        console.log('Event attribute value --->',cmpevent);
        var action=component.get('c.getContactName');
        console.log('Action from apex class--->',action);
        action.setCallback(this,function(response){
        var state=response.getState();
        console.log('state--->',state);     
		alert(state);
        if(state === 'SUCCESS')
        {
              component.set('v.contactdetails',response.getReturnValue());  
        }
        else if(state === 'ERROR')
        {
                
        }
        });
        $A.enqueueAction(action);
	}
})