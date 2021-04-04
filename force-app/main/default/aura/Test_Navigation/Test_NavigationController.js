({ 
    doOrder : function(component, event, helper) {
      alert('Shatrughna Salunke Tes');  
      var pagerefernce=component.find('testNavigation');
      var pageReferenceNav = {    
                       "type": "standard__component",
            "attributes": {
                "componentName": "c__Test_NavigationLightning"    
            },    
            "state": {
                "firstName": "Test"  ,
                "lastName": "user"    
            }
                }
        pagerefernce.navigate(pageReferenceNav);
	}
})