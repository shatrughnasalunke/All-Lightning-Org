({
    valiedFields : function(component,event,helper)
    {
            var isValid=component.find('newContact').reduce(function(validSoFar,inputCmp){
                inputCmp.showHelpMessageIfInvalid();
                inputCmp.set('v.validity',{valid:false ,badInput:true});
                return validSoFar && inputCmp.get('v.validity').valid;
            },true);
            return isValid;
	}
})