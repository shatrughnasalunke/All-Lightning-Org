({
    fetchAccounts : function(component, event, helper) {
        component.set('v.mycolumns',[
            {label: 'Case Number', fieldName: 'linkName', type: 'url', 
            typeAttributes: {label: { fieldName: 'CaseNumber' }, target: '_blank'}},
            {label: 'Subject', fieldName: 'Subject', type: 'text'},
            {label: 'Origin', fieldName: 'Origin', type: 'Text'}
        ]);
        var action = component.get("c.fetchAccts");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var records =response.getReturnValue();
                records.forEach(function(record){
                    record.linkName = '/'+record.Id;
                });
               component.set("v.acctList", records);
            }
        });
        $A.enqueueAction(action);
    }
})