({
    doInit : function(component, event, helper) {
        var actions=[{
            label:'Show Details',
            name:'show_details',
            iconName:'action:preview'
        },
        {
            label:'Delete',
            name:'delete',
            iconName:'action:preview'
        }]; 
        component.set('v.columns', [
            {label: 'Account name', fieldName: 'Name', type: 'text', editable:true},
            {label: 'type', fieldName: 'Type', type: 'text', editable:true},
            {label: 'Phone', fieldName: 'Phone', type: 'Text', editable:true},
            {type :"action", typeAttributes : {rowActions:actions}}
        ]);
        var action=component.get('c.fetchAccount');   
            action.setCallback(this,function(response){
            var state=	response.getState();
            alert(state);
            if(state==='SUCCESS' || state==='DRAFT')
            {
            	var responseValue=response.getReturnValue();
            	console.log('responseValue--->',responseValue);
                component.set('v.data',responseValue); 
            }
          });
       $A.enqueueAction(action);     
	},
    doSelectedRecord :function(component, event, helper)
    {
         alert('Shatrughna Salunke');
         var selectedRows=event.getParam('selectedRows');   
         console.log('selectedRows',selectedRows);   
    },
    handleRowAction :function(component, event, helper)
    {
        var action=event.getParam('action');
        var row=event.getParam('row');
        console.log('action',action.Name);
        console.log('row',row.Name);
        switch(action.Name)
        {
            case'show_details':
            alert('Show Details action fire');    
            break;
            case 'delete':
             
            var data=component.get('v.data');
            var index=data.indexof(row);
            data.splice(index,1);
            component.set('v.data',data);   
            break;    
        }
        
    },
    handledDraftValues :function(component, event, helper)
    {
        var draftRecords=event.getParam('draftValues');
        console.log('draftRecords',draftRecords);
    }
})