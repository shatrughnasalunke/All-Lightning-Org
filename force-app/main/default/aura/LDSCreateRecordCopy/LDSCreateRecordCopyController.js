({
	doInit : function(component, event, helper)
    {	
            component.find('recordCreator').getNewRecord('shatrughna94__Beer__c',null,false,
            $A.getCallback(function()
            {           
                		var record=component.get('v.record');
                        var error=component.get('v.recordError');
                        if(error || (record===null))
                        {
                                console.log('Error while createing the template',error);
                                alert('Template Initialized');
                        }
                        else
                        {
                               console.log('SucessFully Created');
                               alert('Template Initated');
                        }
           })                                             
       );
	}
})