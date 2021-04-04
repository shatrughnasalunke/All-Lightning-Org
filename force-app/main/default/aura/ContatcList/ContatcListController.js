({
	    doInit : function(component, event, helper) {
		
        var action = component.get('c.getContactList');
        actio.setParams({            
        });     
        actio.setCallback(this,function(response){
			var responseValue=response.getReturnValue();  
            console.log('responseValue------------->'+responseValue);
        },'SUCCESS');
        $A.enqueueAction(action,false);    
	}
})