({
	callAuraMethod : function(component, event, helper) {
     alert('Call Parent Component Method')   
	 var getId=component.find("childCmp");
     console.log('getId--->'+getId);
     alert('getId-->',getId);
       var message = getId.auraMethodChild();
	}
})