({
	  doInit: function(component, event, helper) {
        var action = component.get("c.getPiklistValues");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS"){
                var result = response.getReturnValue();
                var plValues = [];
                for (var i = 0; i < result.length; i++) {
                    plValues.push({
                        label: result[i],
                        value: result[i]
                    });
                }
                console.log('plValues--->',plValues);
                component.set("v.GenreList", plValues);
            }
        });
        $A.enqueueAction(action);
    },
    handleGenreChange: function (component, event, helper) {
        var selectedValues = event.getParam("value");
        component.set("v.selectedGenreList", selectedValues);
    },
    getSelectedGenre : function(component, event, helper){
        var selectedValues = component.get("v.selectedGenreList");
        console.log('Selectd Genre-' + selectedValues);
    }
})