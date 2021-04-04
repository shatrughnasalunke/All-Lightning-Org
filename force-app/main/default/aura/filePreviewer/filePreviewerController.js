({
   /* doInit : function(component, event, helper) {
        var action = component.get("c.fetchContentDocument");
        action.setCallback(this, function(response) {
            var state=response.getState();
            if (state === "SUCCESS") {
                component.set('v.lstContentDoc', response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        $A.enqueueAction(action);  
    },
    getSelected : function(component,event,helper){
        //display modle and set seletedDocumentId attribute with selected record Id   
        component.set("v.hasModalOpen" , true);
        component.set("v.selectedDocumentId" , event.currentTarget.getAttribute("data-Id")); 
    },
    closeModel: function(component, event, helper) {
        //for Close Model, set the "hasModalOpen" attribute to "FALSE"  
        component.set("v.hasModalOpen", false);
        component.set("v.selectedDocumentId" , null); 
    },*/
    handleShowPopover : function(component, event, helper) {
        component.find('overlayLib').showCustomPopover({
            body: "Popovers are positioned relative to a reference element",
            referenceSelector: ".mypopover",
            
        }).then(function (overlay) {
            setTimeout(function(){
                //close the popover after 3 seconds
                overlay.close();
            }, 3000);
        });
    }
})