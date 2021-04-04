({
    getUserList : function(component) {
        var action = component.get("c.getEntity");
        alert(action);
        action.setParams({
            "entityType" : component.get("v.componentString") 
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            alert(state)
            if (state === "SUCCESS") {
                component.set("v.sObjList", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    } ,

})