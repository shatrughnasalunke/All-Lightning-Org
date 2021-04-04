({
 parentComponentEvent : function(cmp, event)
    { 
        var message1 = event.getParam("recordType"); 
        alert(message1);
        cmp.set("v.eventMessage", message1);
    } 
})