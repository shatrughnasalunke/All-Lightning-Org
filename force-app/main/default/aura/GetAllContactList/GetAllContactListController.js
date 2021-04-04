({
    doInit : function(component, event, helper) {
        var action = component.get('c.getContactList');
        console.log('action------>'+action);
        action.setParams({
             accId : component.get('v.recordId'), 
        });     
        action.setCallback(this,function(response)
        {
			var responseValue=response.getReturnValue();  
            console.log('responseValue------------->',responseValue);
            component.set('v.contactlist',responseValue);
        },'SUCCESS');     
        $A.enqueueAction(action,false);
	},
    doRedirect : function(component, event, helper) 
    {
        var eventSource = event.getSource();
        var id=eventSource.get('v.name');
        var navEvt = $A.get("e.force:navigateToSObject");
   		navEvt.setParams({
        "recordId": id,
        "slideDevName": "Details"
    });
    navEvt.fire();
    },
    
    handleComponentEvent : function(component, event, helper) {
        alert(Test);
        var avaialbaleContact=component.get('v.contactlist');
        var contactrecord=event.getParam('ContactRecord');
        console.log(contactrecord);
        avaialbaleContact.push(ContactRecord);
        component.set('v.contactlist',avaialbaleContact);
    },
   
    
})