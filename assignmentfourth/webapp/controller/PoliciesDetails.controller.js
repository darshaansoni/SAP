sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageBox, JSONModel) => {
    "use strict";

    return Controller.extend("assignmentfourth.controller.PoliciesDetails", {
        onInit() {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        },

        continue:function(){
            this.oRouter.navTo("RouteConfirmationFinal")
        },

        back:function(){
            window.history.go(-1)
        }

    });
});
