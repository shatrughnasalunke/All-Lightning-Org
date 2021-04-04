({
	onTabUpdated : function(component, event, helper) {
        alert('onTabUpdated');
        var updatedTabId = event.getParam("tabId");
        console.log(updatedTabId);
        alert(updatedTabId);
    },
     onTabRefreshed : function(component, event, helper) {
           console.log("Tab Refreshed");
           var refreshedTabId = event.getParam("tabId");
           var workspaceAPI = component.find("workspace");
           workspaceAPI.getTabInfo({
                tabId : refreshedTabId
           }).then(function(response) {
                console.log(response);    
           });
       },
    handleRecordUpdated :function(component, event, helper)
    {
        var changeType = event.getParams().changeType;
        if (changeType === "ERROR") { /* handle error; do this first! */ }
        else if (changeType === "LOADED") { /* handle record load */ }
            else if (changeType === "REMOVED") { /* handle record removal */ }
                else if (changeType === "CHANGED") { 
                    alert('Test');
       }
    }
})