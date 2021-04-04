({
    handleOnSuccess : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record has been created successfully.",
            "type": "success",
            "mode": "pester"
        });
        toastEvent.fire();
        $A.get("e.force:refreshView").fire();
    }
})