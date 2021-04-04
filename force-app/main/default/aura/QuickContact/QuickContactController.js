({
	    doSave : function(component, event, helper) 
        {
	        var action = component.get('c.createContact1'); 
            alert(action);
            var contc =  component.get('v.CreateContact');
            alert(contc.FirstName);

            var validContact=component.find('contactForm').reduce(function(validSoFar, inputCmp){
                inputCmp.showHelpMessageIfInvalid();
                inputCmp.set('v.validity',{valid:false , badInput:true});
                
                return validSoFar && inputCmp.get('v.validity').valid;
                
            }, true);   
            
        	alert(validContact);
            if(validContact)
        	{
             action.setParams({  
            
             con:component.get('v.CreateContact'),
         
             AccountId :component.get('v.accountId')
           
           });

         action.setCallback(this, function(response)
        {	    
            var state = response.getState();
            alert(state);
            if(state=== 'SUCCESS' || state==='DRAFT')
            {
                var responseValue=response.getReturnValue();
                var componentevent=componen.getEvent('quickcontact');
                componentevent.setParams({
                 ContactRecord:responseValue
                });
                componentevent.fire();
                
            }    
            else if(state==='INCOMPLETE')
            {
                
            }
            else if(state==='ERROR')
            {
                var errors=response.getError();
                cosole.log('errors',errors[0].duplicateResults);
                cosole.log('errors',errors[0].fieldError);
                cosole.log('errors',errors[0].pageErrors[0].Message);
                component.set('v.ErrorMessage',errors[0].pageErrors[0].Message);
                if(errors || errors[0].message);
                {
                    
                    
                }

            }
            
        },'ALL');
      
        $A.enqueueAction(action);
        }
        else
        { 
            alert('Please Input all the inputs');
         }
      }
})