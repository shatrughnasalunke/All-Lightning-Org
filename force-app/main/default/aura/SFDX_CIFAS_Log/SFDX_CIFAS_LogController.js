({
    RemoveFile: function(component, event, helper) {
        var getEventName = component.getEvent("cmpEvent");
        var setId = 'Item Two';
        getEventName.setParams({ "passvalueToMainMenuCompoent": setId });
        getEventName.fire();

    }
})