sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
], (Controller, MessageBox,) => {
    "use strict";

    return Controller.extend("com.yash.project4.project4.controller.TarpingInstruction", {
        onInit() {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this)
        },
        back:function(){
            window.history.go(-1)
        },
        continue:function(){
            this.oRouter.navTo("RoutePoliciesDetails")
            // alert("!!")
        }
    });
});