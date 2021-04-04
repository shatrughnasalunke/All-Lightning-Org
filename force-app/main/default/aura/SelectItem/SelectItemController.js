({
    handleChange : function(component, event, helper) {
        var value=component.get("v.listrecord");
        if(value)
        {
            component.set("v.tabId", "1");
        }
    },
    selectedTab :function(component, event, helper) {
        var appEvent = $A.get("e.c:Search_Record_Application_Event"); 
		var fNameCmp = component.find("fName1").get("v.title");
        console.log('fNameCmp--->',fNameCmp);
        appEvent.setParams({
            "selected_product" : fNameCmp
        });
        appEvent.fire();
    }
})