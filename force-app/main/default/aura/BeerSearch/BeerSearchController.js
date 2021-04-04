({
	doSerach : function(component, event, helper) 
    {
        var componentEvent=component.getEvent('BeerEvent');
        var serachParam=component.find('searchInput').get('v.value');
        console.log('Value from Search Bar In Search Bat Componet------------>'+serachParam); 
        componentEvent.setParams({serachText:serachParam });
        componentEvent.fire();
	}
})