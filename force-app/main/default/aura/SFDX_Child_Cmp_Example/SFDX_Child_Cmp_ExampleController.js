({
    handleComponentEvent: function(component, event, helper) {  
        var message = event.getParam("passvalueToMainMenuCompoent");   
        component.set("v.TabId", message);
        alert(message);
    }
})