({
   	   handleKeyUp: function (cmp, evt) {
        var isEnterKey = evt.keyCode === 13;
        var queryTerm = cmp.find('enter-search').get('v.value');
        if (isEnterKey) {
            cmp.set('v.issearching', true);
            setTimeout(function() {
                alert('Searched for "' + queryTerm + '"!');
                cmp.set('v.issearching', false);
            }, 2000);
        }
    },
   doSearch : function (component,event,helper)
    {
         var geteventvalue=component.getEvent('registereventname');
         console.log('get event--->',geteventvalue);
         var setevent=geteventvalue.setParams(
            {"storedContactEvent" : "A component event fired me. "}
        );
         console.log('set parameter to event attribute--->',setevent);
         geteventvalue.fire();
    }
});