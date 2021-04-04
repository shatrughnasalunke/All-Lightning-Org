({
     getButtonValue:function(component,event,helper)
     {
        var checkCmp = component.find("chkbox").get("v.value");
        component.set("v.chkboxvalue",checkCmp);
     },
 })