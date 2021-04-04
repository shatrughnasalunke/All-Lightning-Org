({
    FireEvent: function(component, event, helper) {
        var appEvent = $A.get("e.c:SFDX_Application_Event");
        appEvent.setParams({
            "passMessage": " Vlaue from event"
        });

        appEvent.fire();
    }
})