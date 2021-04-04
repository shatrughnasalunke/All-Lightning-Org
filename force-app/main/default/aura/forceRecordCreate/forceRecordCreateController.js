({
    createContact : function (component, event, helper) {
        alert('Shatrughna Salunke')
        var createRecord = $A.get("e.force:createRecord");
        createRecord.setParams({
            "entityApiName": "Contact",
            "defaultFieldValues": {
                'Phone' : '415-240-6590',
                'AccountId' : component.get('v.recordId'),
                'Email' :'shatrughnasalunkhe@gmail.com'
            }
        });
        createRecord.fire();
    },
    editAccount : function(component,event,helper)
    {
		var editRecord = $A.get("e.force:editRecord");
        editRecord.setParams({
            "recordId" : component.get('v.recordId')
        });      
   
		editRecord.fire();
     } ,
    initialize: function (component, event, helper) {
        var options = [
        { label: 'English', value: 'en' },
        { label: 'German', value: 'de' },
        { label: 'Spanish', value: 'es' },
        { label: 'French', value: 'fr' },
        { label: 'Italian', value: 'it' },
        { label: 'Japanese', value: 'ja' }];
        var values = ["en", "de", "es"];
        var required = ["fr", "it"];
        component.set("v.listOptions", options);
        component.set("v.defaultOptions", values);
        component.set("v.requiredOptions", required);
    },
    handleChange: function (cmp, event) {
        // Get the list of the "value" attribute on all the selected options
        var selectedOptionsList = event.getParam("value");
        alert("Options selected: '" + selectedOptionsList + "'");
    }
});