({ 
    
    doOrder : function(component, event, helper) {
      var pagerefernce=component.find("navigate");
      var pageReferenceNav = {
          				  "type": "standard__component",
                          "attributes": {
                              "componentName": "c__CreateBeerOrder",
                           
                          },
                          "state":
          				  {
                              "c__beerId":component.get('v.beerId')  
            			  }
      			  };
        pagerefernce.navigate(pageReferenceNav);
    
	}
})