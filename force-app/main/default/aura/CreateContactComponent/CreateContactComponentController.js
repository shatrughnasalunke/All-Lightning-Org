({
	    handleReview : function(component,event,helper) {
        var isValid=helper.valiedFields(component,event,helper);
        if(isValid)
        {     
       		 var appEvent =component.getEvent('CreateContacts');
             component.set('v.ContactRecord.AccountId',component.get('v.recordId'));
       		 appEvent.setParams({
                 'conRecord' : component.get('v.ContactRecord')
            	});
        	 appEvent.fire();
        }    
    },
    SelectRecord : function(component,event,helper) 
    { 
       var params = event.getParam('arguments');
       if (params)
       {
         alert(params);  
         var contactRecord=params.contact;
         alert(contactRecord.LastName[0]);  
         cosole.log(contactRecord);  
         console.log('contactRecord-->',contactRecord.LastName);
           
           
       }
       else
       {
       }
    },
    SelectRecod11 : function(component,event,helper) 
    { 
       var params = event.getParam('arguments');
       if (params)
       {
         alert(params);  
         var contactRecord=params.contact;
         alert('contactRecord'+contactRecord.LastName);  
         component.set('v.ContactRecord',contactRecord);         
       }
       else
       {
       }
    }, 
})