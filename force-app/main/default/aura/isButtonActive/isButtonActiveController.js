({
    doInit : function(c, e, h){

  },
    activeButton : function(c, e, h){
        let inputText = c.find("inpsummary").get("v.value");
        if(inputText != null){
            c.set('v.isButtonActive',false);
        }       
    },
})