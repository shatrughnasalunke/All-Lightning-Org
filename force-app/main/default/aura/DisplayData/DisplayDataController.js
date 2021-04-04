({
	doInit : function(component, event, helper) 
    {
        var action=component.get("c.searchRecord");
        action.setCallback(this,function(response){
            var state=response.getReturnValue();
            alert(state);
            component.set("v.storedValue",state);
        });
		$A.enqueueAction(action);
	}
})