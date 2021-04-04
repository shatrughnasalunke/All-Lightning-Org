({
    fireApplicationEvent : function(cmp, event) {
        var appEvent = $A.get("e.c:appEvent"); 
        var inpText = cmp.find("inpId").get("v.value");
        console.log('inpText--->',inpText);
        appEvent.setParams({"message" : inpText}); 
        appEvent.fire(); 
    }
})