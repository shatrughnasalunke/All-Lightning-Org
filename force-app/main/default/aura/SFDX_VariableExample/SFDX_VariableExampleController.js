/** Client-side Controller **/
({
    getNumbers: function(component, event, helper) {
        var numbers = [];
        for (var i = 0; i < 20; i++) {
            numbers.push({
                value: i
            });
        }
        component.set("v.numbers", numbers);
    },

    addToMap: function(cmp, event, helper) {
        var myMap = cmp.get("v.sectionLabels");
        myMap['c'] = 'label3';
        console.log("myMap: " + JSON.stringify(myMap));

        // get map entry
        var entryA = myMap['a'];
        console.log("entryA: " + entryA);

        // iterate map
        for (var key in myMap) {
            console.log("key: " + key + ", value: " + myMap[key]);
        }
    }

})