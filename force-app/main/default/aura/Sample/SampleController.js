({
    //Load Account Industry Picklist
    doInit: function(component, event, helper) {        
        helper.getIndustryPicklist(component, event);
    },
     
    //handle Account Save
    handleAccountSave : function(component, event, helper) {
        helper.saveAccount(component, event);
    },
     
    //handle Industry Picklist Selection
    handleCompanyOnChange : function(component, event, helper) {
        var indutry = component.get("v.acc.Industry");
        var indutry = component.get("v.acc.shatrughna94__Country__c");
        alert(indutry);
        var action = component.get("c.gteValues");
        action.setParams({
            selectdCountry : indutry
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var result=response.getReturnValue();
               component.set("v.industryMapValues",result);
                component.set("v.isDisabled",false);
            } else if(state === "ERROR"){
                var errors = action.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert(errors[0].message);
                    }
                }
            }else if (status === "INCOMPLETE") {
                alert('No response from server or client is offline.');
            }
        });       
        $A.enqueueAction(action);
    }
})