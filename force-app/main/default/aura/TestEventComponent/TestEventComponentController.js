({
    test :function(cmp, event,helper)
    {
		alert('Application event fire');
        var applicationEvent = $A.get("e.c:TestEvent");
    	applicationEvent.setParams({"item" : itemID})
    	applicationEvent.fire();
    }   
})