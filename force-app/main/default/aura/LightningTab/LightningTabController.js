({
	handleActive : function(component, event, helper) {
		var tab=event.getSource();
        var tabId=tab.get('v.id');
        switch (tabId) 
        {
            case 'acc' :
                component.set('v.accinfo','Account Information Goes Here');
                break;
            case 'con' :
                break;
            case 'case':
                break;
            case 'Oppo':
                break;
        }
	}
})