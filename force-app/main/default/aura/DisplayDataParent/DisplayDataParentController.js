({
	doInit : function(component, event, helper)
    {
        var searchParam=event.getParam('passValue');
        console.log('searchParam--->',searchParam);
        var action=component.get('c.getName');
        action.setParams({
            Name:searchParam
        });  
        action.setCallback(this,function(response){
            var state=response.getState();
            alert(state);
            if(state==='SUCCESS')
            {	
             var success= response.getReturnValue();
             console.log('success--->',success);
             component.set('v.accountValue',success);
            }
            else if(state ===  'ERROR')
            {
                console.log('error--->',response.getError());
            }
        });
        $A.enqueueAction(action);
	}
})