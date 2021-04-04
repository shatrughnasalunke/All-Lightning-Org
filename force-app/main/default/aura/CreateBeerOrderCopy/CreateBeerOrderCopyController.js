({
	  doInit : function(component, event, helper) {
        var pageReference = component.get('v.pageReference');
        if(pageReference){
            var state = pageReference.state;
            component.set('v.beerId',state.c__beerId);
            component.find("recordViewer").reloadRecord();
        }
        component.find("newRecordCreator").getNewRecord(
            "shatrughna94__Beer_Order__c", 
            null,      
            false,    
            $A.getCallback(function() {
                var rec = component.get("v.newRecordObject");
                alert(rec);
                var error = component.get("v.newRecordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }
                else {
                    console.log("Record template initialized: " + rec.sobjectType);
                }
            })
        );
    },
})