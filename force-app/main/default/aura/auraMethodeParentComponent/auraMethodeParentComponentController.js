({
	callAuraMethod : function(component, event, helper) {
        var childComponent = component.find("childCmp");
        var message = childComponent.childMessageMethod();
        alert('Call Aura Method Shatrughna');
    }
})