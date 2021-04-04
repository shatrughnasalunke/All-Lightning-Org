({
    fireComponentEvent: function(component, event, helper) {
        var cmpEvent = component.getEvent("cmpEvent");
        var setId = 'Item Two';
        alert('setId---->' + setId);
        cmpEvent.setParams({ "passvalueToMainMenuCompoent": setId });   
        cmpEvent.fire();
    }
})