({
	fireComponentEvent : function(component, event, helper) {
        var evnComp=component.getEvent("eventName");
        console.log('evnComp--->',evnComp);
        evnComp.setParams({
            "message" : "Hi Shatrughna" 
        });
        evnComp.fire();
	}
})