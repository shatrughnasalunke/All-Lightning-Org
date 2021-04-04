({
	DoCreate : function(component, event, helper)
    {    
       alert('Shatrughna Salunke'); 
        var map=[];
       
        for(var i=0;i<=10;i++)
            {
                map.push({key:i,value:'Test'+i});
                
            }
        component.set('v.LisofColor1',map);
	}
})