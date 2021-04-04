({
	fireComponentEvent : function(component, event,helper)
    { 
    	var component = component.getEvent("SourceEvent"); 
        alert('I am from source Component',component);
		component.fire(); 
	} 
})