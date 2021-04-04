({
    doInit : function(component, event, helper) {
        var getParam=event.getParam('search_record_attr');
        var action=component.get('c.searchRecord');
        console.log('action-->'+action);
        action.setParams({
            getName:getParam
        });
        action.setCallback(this,function(response)
                           {
                               var state=response.getState();
                               console.log('state--->',state);
                               if(state === 'SUCCESS')
                               {
                                   component.set('v.wrapperList',response.getReturnValue());
                                   var getValue= component.get('v.wrapperList');
                                   console.log('getValue--->',getValue);
                               }
                               else if(state === 'ERROR')
                               {
                                   console.log('error--->',response.getError());
                               }
                           });
        $A.enqueueAction(action);
    }
})