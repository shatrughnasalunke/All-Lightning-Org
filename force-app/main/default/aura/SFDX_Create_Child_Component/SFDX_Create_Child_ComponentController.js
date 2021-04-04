({
    handleKeyUp: function(component, event, helper) {
        var queryTerm = component.find('enter-search').get('v.value');
        alert('Searched for "' + queryTerm + '"!');
        if (queryTerm != '') {
            var action = component.get("c.getList");
            action.setParams({
                getName: queryTerm
            });
            action.setCallback(this, function(response) {
                var result = response.getState();
                if (result === 'SUCCESS') {
                    var getReturnvalue = response.getReturnValue();
                    var responseObj = JSON.parse(response.getReturnValue());
                    var datalist=[];
                    for(var i=0;i<responseObj.length;i++)
                    {
                      component.set("v.name",responseObj[i].Name);
                    }
                    var eventName=component.getEvent("getName");
                    eventName.setParams({
                        setname: component.get("v.name")
                    });
                    eventName.fire();
                } else {
                    if (result === 'ERROR') {
                        var error = response.getError();
                        console.log(error[0].Message);
                    }
                }
            });
            $A.enqueueAction(action);
        } else {
        }
    }
});