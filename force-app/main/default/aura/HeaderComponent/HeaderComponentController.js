/*({
    updateCart  : function(component, event, helper) {
         var params =event.getParams('arguments');
         console.log('params.beerRecord',params.beerRecord);
         if(params)
         {
             var beerRecord=params.beerRecord;
             var existingRecords=component.get('v.recordList');
             console.log('existingRecords---->',existingRecords);
              if(existingRecords)
              {
                  existingRecords.push(beerRecord);
                  component.set('v.recordList',existingRecords);
                  console.log('IF existingRecords in Header Component',existingRecords);
              }
             else
             {    existingRecords=[];
                  existingRecords.push(beerRecord);
                  component.set('v.recordList',existingRecords);
                  console.log('Else existingRecords in Header Component',existingRecords); 
             }
             alert();
            
         }
        var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Success!",
                "type" :"Success",
                "message":"Item has been added to the cart successfully."
            });
            toastEvent.fire();
	},
})*/
({
    updateCart : function(component, event, helper) {
        var params = event.getParam('arguments');
        alert(params);
        console.log('params',params);
        if(params){
             console.log('inside If');
            var beerRecord = params.beerRecord;
             console.log('beerRecord',beerRecord);
            var existingRecords = component.get('v.recordList');
            console.log('existingRecords',existingRecords);
            if(existingRecords){
                existingRecords.push(beerRecord);
                component.set('v.recordList', existingRecords);
            } else {
                existingRecords = [];
                existingRecords.push(beerRecord);
                component.set('v.recordList', existingRecords);
            }
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Success!",
                "type" : "success",
                "message": beerRecord.Name+ " has been added to the cart."
            });
            toastEvent.fire();
        }
    }
})