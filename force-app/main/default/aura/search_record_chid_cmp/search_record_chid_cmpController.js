({
	searchrecord : function(component, event, helper)
    {
		var cmpevent=component.getEvent('eventName');
        var queryTerm = component.find('enter-search').get('v.value');
        cmpevent.setParams({
            search_record_attr :queryTerm
        })
       cmpevent.fire();     
	},
    setPlaceholder:function(component, event, helper){
              
        var placeholder = event.getParam("selected_product");
        component.set('v.placeholder',placeholder);
    }
})