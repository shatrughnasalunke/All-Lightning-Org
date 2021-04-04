({
    insertRecord : function(component, event, helper) {
        var attribute=event.getParam("arguments");
        console.log('attribute--->',attribute);
        if(attribute)
        {
            var attributeName=attribute.lastname;
            alert(attributeName);
            var action= component.get('c.doInsert');
            action.setParams({
                lastname:attributeName
            });
            action.setCallback(this,function(response){
                var state=response.getState();
                alert(state);
                if(state==='SUCCESS')
                {
                    var getValue=response.getReturnValue(); 
                    console.log('getValue--->',getValue);
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        title : 'Success',
                        message: 'Record has been created successfully',
                        duration:' 5000',
                        key: 'info_alt',
                        type: 'success',
                        mode: 'pester'
                    });
                    toastEvent.fire();
                }
                else if(state==='ERROR')
                {
                    console.log(response.getError());
                    var error=response.getError();
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        title : 'Error',
                        message:'This is an error message',
                        duration:' 5000',
                        key: 'info_alt',
                        type: 'error',
                        mode: 'pester'
        });
        toastEvent.fire();
                }
            });
            $A.enqueueAction(action);
        }
    }
})