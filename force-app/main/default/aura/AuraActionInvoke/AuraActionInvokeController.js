({
    pressDiv: function(cmp, event) {
        var div = cmp.find("displayResult");
        if (div) {
            div.getElement().innerHTML = "Div Action is Presed";
        }
    },
    pressButton: function(cmp, event) {
        var div = cmp.find("displayResult");
        if (div) {
            div.getElement().innerHTML = "Button Action is Pressed";
        }
    },

})