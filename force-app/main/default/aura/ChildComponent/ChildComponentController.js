({
    getMessage : function(component, event) {
        var params = event.getParam('arguments');
        alert(params);
        if (params)
        {
			alert('Inside If Condition');
            var param1 = params.childGreetingParam;
            var param2 = params.childPersonNameParam;
            alert(param1 + " " + param2);
        }
    }
})