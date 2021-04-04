({
    init: function (cmp, event, helper) {
        var action=cmp.get('c.fetchAccount');
        console.log('Get Controller Data fetch Account--->',action);
        action.setCallback(this,function(response){
            var state=response.getState();
            alert(state)
            if(state=='SUCCESS' ||  state=='DRAFT')
            {
                var resultData=response.getReturnValue();
                console.log('resultData--->',resultData);
                var mapMarkers=[];
                for(let i=0; i<resultData.length ; i++)
                 {
                         mapMarkers.push( { location: {
                         Street:resultData[i].ShippingStreet,
                         City: resultData[i].ShippingCity,
                         State: resultData[i].ShippingState,
                         PostalCode:resultData[i].ShippingPostalCode,
                         Country:resultData[i].ShippingCountry
                     },
                     title: resultData[i].ShippingStreet,
                     description: resultData[i].ShippingCity  
                   });
                 }
                console.log('mapMarkers--->',mapMarkers);
                cmp.set('v.mapMarkers',mapMarkers);
                cmp.set('zoomLevel',10);
            }
            else
            {
                var errors=response.getError();
                console.log('Error--->',errors);
            }
        });
        $A.enqueueAction(action);
    }
});