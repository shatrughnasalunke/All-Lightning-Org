({
	    fireApplicationEvent : function(component,event,helper) {
        var isValid=helper.valiedFields(component,event,helper);
        alert(isValid);
        if(isValid)
        {     
       		 var appEvent =component.getEvent('appEvent');
       		 appEvent.setParams({
                 
                 'conRecord' : component.get('v.ContactRecord')
                 
            	});
        		appEvent.fire();
       	 	alert('Component Event1 Fire');     
        }    
    } 
})