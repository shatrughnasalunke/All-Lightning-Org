({
    handleShowModal: function(component, event, helper)
    {   
        component.find('overlayLib').showCustomModal
        ({
            header: "Application Confirmation",
            body: 'This is an test modal',
            showCloseButton: true,
            closeCallback: function()
            {
                alert('You closed the alert!');
            }
        });
    },
    navigate : function(component, event, helper) {
        var nagigateLightning = component.find('navigate');
        var pageReference = {    
            "type": "standard__component",
            "attributes": {
                "componentName": "c:BeerExplorer"    
            },    
            "state": {
                "myAttr": "attrValue"    
            }
        };
        nagigateLightning.navigate(pageReference);
    }
})