({
  doChange:function(component,event,helper)
  {  
  	 alert('Value Changed');
  },
  changeValue:function(component,event,helper)
  {   
   	component.set('v.Test','Test');
  },
  doInit : function(component,event,helper)
  {   
   	var c=component.set('v.Test','On Init');
    console.log('c----------->',c);  
  }       
})