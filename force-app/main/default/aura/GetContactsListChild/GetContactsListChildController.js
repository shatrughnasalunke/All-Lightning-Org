({
	doInit : function(component, event, helper) {
		var cmpEvent=component.getEvent('eventName');
        console.log('cmpEvent--->',cmpEvent);
        var contactname=component.get('v.conactName');
        console.log('contactname--->',contactname);
        cmpEvent.setParams({
            contacteventattribute :contactname
        });
        cmpEvent.fire();
      }
})