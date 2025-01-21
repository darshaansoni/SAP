sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
], (Controller, MessageBox,) => {
    "use strict";

    return Controller.extend("assignmentfourth.controller.Shipment", {
        onInit() {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this)
        },
        traileroption:function(){
            this.oRouter.navTo("RouteTarpingInstruction") 
        },
        back:function(){
            window.history.go(-1)
        },
        goHome:function(){
            this.oRouter.navTo("Routewelcome") 
        }
    });
});