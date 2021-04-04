({
	doInit : function(component, event, helper)
    {	
        alert('handler executed1');
        var getAttributeValue=component.get('v.myvalue');
        console.log('getAttributeValue-->',getAttributeValue);
        var callFunction=component.get('c.getName');
        console.log('callFunction--->',callFunction);
        callFunction.setParams({
            Name : component.get('v.myvalue')
        })
        callFunction.setCallback(this,function(response){
        var state=response.getState();
        var succ=response.getReturnValue();
        if(state==="SUCCESS")
        {
			component.set('v.getValue',succ);
        }
        else
        {
        }
        });
        $A.enqueueAction(callFunction);
	}
})