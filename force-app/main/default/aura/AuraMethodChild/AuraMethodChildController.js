({
	   createRecord : function(component, event, helper)
       {
            var param1=event.getParam('arguments');
            console.log('param1-->',param1);
            if(param1)
            {
                var gatributeValue=param1.passparameter;
                alert(gatributeValue);
            }
       }
})