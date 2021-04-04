({
    handleComponentEvent: function(component, event, helper) {

        var getvalue = event.getParam("setname");
        component.set("v.getName", getvalue);

    }
})