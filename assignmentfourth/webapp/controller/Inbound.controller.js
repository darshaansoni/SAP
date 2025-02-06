sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller,MessageBox) => {
    "use strict";

    return Controller.extend("assignmentfourth.controller.Inbound", {
        onInit() {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this)
        },
        back:function(){
            window.history.go(-1)
        },
        continue:function(){
            const input = this.byId("number").getValue()

            console.log(input);
            

            if(input != null){
                this.oRouter.navTo("RoutePhoneDetails")
            }
            else{
                MessageBox.error("Kuch to likh")
            }
        }
    });
});