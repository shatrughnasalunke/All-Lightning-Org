({
	handleActive : function(component, event, helper) {
		var tab=event.getSource();
        var tabId=tab.get('v.id');
        alert(tabId);
        switch (tabId)
        {
            case 'Account' :
            component.set('v.accinfo','Account information goes here');
            break;
            
        }
	}
})