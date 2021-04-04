({
	doInit : function(component, event, helper)
    {
         var attributeValue=component.get('v.myValue');
         console.log('attributeValue--->',attributeValue);  
         var cmpEvent = component.getEvent("passValueName"); 
         console.log('cmpEvent--->',cmpEvent);
         cmpEvent.setParams({
             "passValue" : attributeValue
        }); 
        cmpEvent.fire(); 
	} 
})