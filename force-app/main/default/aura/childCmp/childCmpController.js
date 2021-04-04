({
    doSerach : function(component, event,helper) { 
        var cmpEvent = component.getEvent("searecevt"); 
        cmpEvent.setParams(
            {
                "recordType" : component.get("v.selectedValue") }
            ); 
        cmpEvent.fire(); 
    }
})