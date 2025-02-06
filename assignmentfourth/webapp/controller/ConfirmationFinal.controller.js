sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller, MessageBox, JSONModel) => {
    "use strict";

    return Controller.extend("assignmentfourth.controller.ConfirmationFinal", {
        onInit() {

            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            
            setTimeout(()=>{
                this.oRouter.navTo("Routewelcome")
            }, 30000)
        },

        continue:function(){
            this.oRouter.navTo("Routewelcome")
        },
    });
});