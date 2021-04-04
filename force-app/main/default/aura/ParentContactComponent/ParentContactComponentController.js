({
    parentMethod : function(component, event, helper) {
        var childComponent = component.find("parentId");
        console.log('---->',childComponent);
        var message = childComponent.childMessage();

    }
})