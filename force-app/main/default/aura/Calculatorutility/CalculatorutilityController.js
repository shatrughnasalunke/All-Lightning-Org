({
	Addition : function(component, event, helper) {
		 var Number1 =component.get('v.Input1');
         var Number2 =component.get('v.Input2');
         component.set('v.Input3',parseInt(Number1)+parseInt(Number2)); 
         //alert(parseInt(Number1)+parseInt(Number2));
	},
    
    Substraction : function(component, event, helper) {
		var Number1=component.get('v.Input1');
        var Number2=component.get('v.Input2');
        //alert(parseInt(Number1)-parseInt(Number2));
     component.set('v.Input3',parseInt(Number1)- parseInt(Number2));	},
    
    MultiPlication : function(component, event, helper) {
		var Number1=component.get('v.Input1');
        var Number2=component.get('v.Input2');
        //alert(parseInt(Number1)*parseInt(Number2));
     component.set('v.Input3',parseInt(Number1)*parseInt(Number2));	},
    
    Devide : function(component, event, helper) {
		var Number1=component.get('v.Input1');
        var Number2=component.get('v.Input2');
        //alert(parseInt(Number1)/parseInt(Number2));
     component.set('v.Input3',parseInt(Number1)/parseInt(Number2));    },
    
    Refresh: function(component, event, helper)
    {
        alert('Hi shatrughna Salunke');
        
    },
    
     Reset : function(component, event, helper) {
       
        component.set("v.Input1", null);
        component.set("v.Input2", null);
        component.set("v.Input3",null);

    },
    
})