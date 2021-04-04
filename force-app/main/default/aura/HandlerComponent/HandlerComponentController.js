({
    handleApplicationEvent : function(cmp, event)
    {
        var message = event.getParam("message");
        cmp.set("v.messageFromEvent", message);
     },
})