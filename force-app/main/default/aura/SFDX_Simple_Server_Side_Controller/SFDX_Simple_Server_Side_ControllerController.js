({
    callMe: function(component, event, helper) {

        var action = component.get("c.callMe");
        action.setparams({
            fileName: component.get("v.getName")
        });
        action.setCallback(this, function(response) {

            var result = response.getState();

            if (result === 'Success') {

                console.log(response.getReturnValue());

            } else {

            }
        });

        $A.enqueueAction(action);

    }
})