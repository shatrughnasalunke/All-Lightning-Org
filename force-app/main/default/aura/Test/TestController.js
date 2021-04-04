({
	onSingleSelectChange: function(cmp) {
         var selectCmp = cmp.find("name");
         var getValue=selectCmp.get("v.value");
         console.log('getValue---->',getValue);
	 },

})