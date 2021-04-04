({
	RemoveRecord : function(component, event, helper) 
    {
        alert('Test Record');
        console.log('Remove Record Executed');
		var index =event.currentTarget.id;
        alert(index);
        var existingRecords=component.get('v.contactRecords');
        console.log('existingRecords--->',existingRecords);
        existingRecords.splice(index,1);
		component.set('v.contactRecords',existingRecords);
	},
    editRecord : function(component, event, helper) 
    {
        var index =event.currentTarget.id;
        var existingRecords=component.get('v.contactRecords');
        var selectedRecord=existingRecords[index]; 
        console.log('selectedRecord--->',selectedRecord);
       
        var SelectedRecordEvent =component.getEvent('SelectedRecordEvent');
        SelectedRecordEvent.setParams({
                 'Contact' : selectedRecord
        });
        SelectedRecordEvent.fire();
        
    }
})