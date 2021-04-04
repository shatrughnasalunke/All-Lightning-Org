({
	doAnotherFunction : function(component, event, helper) 
    {
        alert('Event Handle');
		var item = event.getParam("item");
        alert('The item is: ' + item);
	}
})