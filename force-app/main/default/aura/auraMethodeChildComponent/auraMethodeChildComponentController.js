({
	getMessage : function(component, event,helper) {
    var params = event.getParam('arguments');
    if (params)
    {
            alert('Aura Method Child Component');
            var param1 = params.childGreetingParam;
            alert(param1);
            alert('Shatrughna Salunke');
    }
   
  },
})