({  getPendingRecordJs : function(component, event, helper) 
    {
         component.set('v.mycolumns',[
            {label: 'Case Number', fieldName: 'CaseNumber', type: 'text'},
                {label: 'Origin', fieldName: 'Origin', type: 'text'},
                {label: 'Status', fieldName: 'Status', type: 'text'},
                {label: 'Type', fieldName: 'Type', type: 'Picklist'},
                {label: 'Subject', fieldName: 'Subject', type: 'text'},
                {label: 'Description', fieldName: 'Description', type: 'text'}
            ]);
        var action=component.get('c.pendingApprovalRecord');
        action.setCallback(this,function(response)
                           {
                               var state=response.getState();
                               if(state==='SUCCESS')
                               { 
                                   var responseValue=response.getReturnValue();
                                   console.log('responseValue------------>',responseValue);
                                   var v=component.set('v.pending',responseValue);
                               }
                               else
                               {
                                   console.log(response.getError());
                               }
                           }); 
        $A.enqueueAction(action);
    },
    getApproved : function(component, event, helper) 
    {    component.set('v.mycolumns',[
            {label: 'Case Number', fieldName: 'CaseNumber', type: 'text'},
                {label: 'Origin', fieldName: 'Origin', type: 'text'},
                {label: 'Status', fieldName: 'Status', type: 'text'},
                {label: 'Type', fieldName: 'Type', type: 'Picklist'},
                {label: 'Subject', fieldName: 'Subject', type: 'text'},
                {label: 'Description', fieldName: 'Description', type: 'text'}
            ]);
        var action=component.get('c.getApproved');
        action.setCallback(this,function(response)
                           {
                               var state=response.getState();
                               if(state==='SUCCESS')
                               {
                                   var responseValue=response.getReturnValue();
                                   console.log('responseValue------------>',responseValue);
                                   var v=component.set('v.approved',responseValue);
                               }
                               else
                               {
                                   console.log(response.getError());
                               }
                           }); 
        $A.enqueueAction(action);
    },
    getRejected : function(component, event, helper) 
    { component.set('v.mycolumns',[
            {label: 'Case Number', fieldName: 'CaseNumber', type: 'text'},
                {label: 'Origin', fieldName: 'Origin', type: 'text'},
                {label: 'Status', fieldName: 'Status', type: 'text'},
                {label: 'Type', fieldName: 'Type', type: 'Picklist'},
                {label: 'Subject', fieldName: 'Subject', type: 'text'},
                {label: 'Description', fieldName: 'Description', type: 'text'}
            ]);
        var action=component.get('c.getRejected');
        action.setCallback(this,function(response)
                           {
                               var state=response.getState();
                               if(state==='SUCCESS')
                               {
                                   var responseValue=response.getReturnValue();
                                   console.log('responseValue------------>',responseValue);
                                   var v=component.set('v.rejected',responseValue);
                                   console.log('Rejected Values--->',v);
                               }
                               else
                               {
                                   console.log(response.getError());
                               }
                           }); 
        $A.enqueueAction(action);
    },
})