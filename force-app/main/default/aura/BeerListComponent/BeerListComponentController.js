({
    /*below code is used to display data on same page  onclick view ditals button  
    shwoInfo : function(component, event, helper) 
    {
        var eventsource=event.getSource();
        var beerobj=eventsource.get('v.name');
        component.set('v.beerId',beerobj);
	}*/ 
    shwoInfo : function(component, event, helper)
    {
        var eventsource=event.getSource();
        var beerobj=eventsource.get('v.name');
        console.log(beerobj);
        component.set('v.beerId',beerobj);
        $A.createComponent(
            "c:BeerDetails",
            {
                "beerId" : beerobj
                
            },
            function(beerDetails, status, errorMessage){
                if (status === "SUCCESS") 
                {
                    component.find('overlayLib').showCustomModal
                    ({
                        header: "Beer Details",
                        body: beerDetails,
                        showCloseButton: true,
                        closeCallback:function()
                        {
                        }
                    });  
                }
                else if (status === "INCOMPLETE") 
                {
                    console.log("No response from server or client is offline.")
                }
                    else if (status === "ERROR") 
                    {
                        console.log("Error: " + errorMessage);
                    }
            }
        );
    },
    addToCart : function(component, event, helper)
    {
        var eventsource=event.getSource();
        var beerId=eventsource.get('v.name');
        var index=eventsource.get('v.value');
        var selectedBeer=component.get('v.recordList')[index];
        var addToCartEvent=component.getEvent('addToCart');
        addToCartEvent.setParams({
            beerRecord : selectedBeer
        });
        addToCartEvent.fire();
    }
})