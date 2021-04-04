({
	callMe : function(component, event, helper) {
        var auraId=component.find('auarId');
        alert(auraId);
        console.log(auraId);
        var callme=auraId.AuraMethodChild1();
	}
})