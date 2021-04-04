({
	doHandleEvent : function(component, event, helper) {
        var conRecord = event.getParam("conRecord");
        var contactList=component.get('v.contactList');
        console.log('contactList--->',contactList);
        if(contactList)
        {
			contactList.push(conRecord);
            console.log('contactList--->',contactList);
            component.set('v.contactList',contactList);
        }
        else
        {	contactList=[];
            contactList.push(conRecord);
            console.log('contactList--->',contactList);
            component.set('v.contactList',contactList);
        }
	},
    handleSave : function(component, event, helper)
    {
         var action=component.get('c.createContact');
         console.log('action-->',action); 
         action.setParams({
            
             apexContactList : component.get('v.contactList'),
             apexAccountId  :  component.get('v.recordId')
         });
         action.setCallback(this,function(response){
            var state=response.getState();
            alert(state);
            if(state==='SUCCESS' || state==='DRAFT')
            {
                $A.get('e.force:refreshView').fire();
            }
            else if(state==='INCOMPLETE')
            {
                
            }
            else if(state ==='ERROR')
            {
  				var error=response.getError();
                cosole.log('error -->',error);
            }
            else
            {
              
            }
        },'ALL');
        $A.enqueueAction(action);
        
    },
    
    handleSelectedEvent : function(component, event, helper)
    {
        var selectedRecord =event.getParam('Contact');
        console.log('selectedRecord---->',selectedRecord.FirstName);
        console.log('selectedRecord---->',selectedRecord.LastName); 
        var createConatct=component.find('createContact');
        createConatct.SelectRecord('selectedRecord');
    },
})