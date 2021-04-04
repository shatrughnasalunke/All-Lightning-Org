({    
      getCaseList : function(component, event, helper)
      { 
            var action = component.get("c.getContact");
	   		action.setCallback(this, function(response)
       		{
       			var state = response.getState();
            	if (component.isValid()&&state === "SUCCESS")
               	var v= component.set("v.cases", response.getReturnValue());
               	console.log('---->',v); 
       		 });
             $A.enqueueAction(action);
     }
})