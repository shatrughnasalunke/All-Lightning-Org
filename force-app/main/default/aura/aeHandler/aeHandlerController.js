({
	 handleApplicationEvent : function(cmp, event) {
        var conRecord = event.getParam("conRecord");
        console.log('conRecord',conRecord);
         alert('Handler Component Fire');
    }
})