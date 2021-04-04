({
  doInit: function(component, event, helper) {
    component.find("recordCreator").getNewRecord(
      "shatrughna94__Beer__c",null,false,
     $A.getCallback(function() 
     {
            var rec = component.get("v.record");
            var error = component.get("v.recordError");
            if (error || rec === null)
            {
              console.log("Error initializing record template: " + error);
              alert("Error Occured");
            }
            else 
            {
              console.log("Record template initialized:");
              alert("Success");
            }
      })
    );
  },
  handleSave: function(component, event, helper) 
  {
    component.set('v.recordFields.shatrughna94__Id__c','12344');  
    component.find("recordCreator").saveRecord(function(saveResult) {
      if (saveResult.state === "SUCCESS" || saveResul === "DRAFT") {
        var showToast = $A.get("e.force:showToast");
        showToast.setParams({
          title: "Success!",
          type: "Success",
          mode: "pester",
          message: "The record has been created successfully"+saveResult.Id
        });
        showToast.fire();
      }
      else if (saveResult.state === "INCOMPLETE")
      {
      }
      else if(saveResult.state === "ERROR") {
      }
      else
      {
      }
    });
  }
});