({
    handleDelete: function(component, event, helper)
    {  
       console.log('Outside If Condtion');   
       component.find("recordHandler").deleteRecord($A.getCallback(function(deleteResult) 
       {
         
        if (deleteResult.state === "SUCCESS" || deleteResult.state=== "DRAFT")
        {	
            console.log('Inside If Condtion');  	
            var showToast = $A.get("e.force:showToast");
            showToast.setParams({
                    title: "Success!",
                    type: "Success",
                    mode: "pester",
                    message: "Beer record has been deleted"
                });
                showToast.fire();
                var pagerefernce=component.find('naveReference');
                var pageReferenceNav = {
          				  type: 'standard__objectPage',
                          attributes: {
                            objectApiName: 'shatrughna94__Beer__c',
                            actionName: 'list'
                          },
                          state:
                          {
                             
                          }
      			  };
                pagerefernce.navigate(pageReferenceNav);
         } 
         else if (deleteResult.state === "INCOMPLETE")
         {
            
         }
         else if(deleteResult.state === "ERROR")
         {
            
         }
         else
         {
            
         }
        }));
    }
})