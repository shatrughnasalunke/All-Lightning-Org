({
	executeEvent:function(component, event, helper) 
    {
        alert('Application Source Component');
        var appe = $A.get('e.c:ApplicationEvent').fire();
	}
})