sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("assignmentfourth.controller.confirmation", {
        onInit: function () {
          this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        },

        // _onRouteMatched: function (oEvent) {
        //     var sShipmentId = oEvent.getParameter("arguments").shipmentId;
            
        //     // Load data from data.json
        //     $.ajax({
        //         url: "model/data.json",
        //         dataType: "json",
        //         success: function(oData) {
        //             var shipmentData = oData.shipments[sShipmentId];
        //             var oModel = new JSONModel(shipmentData);
        //             this.getView().setModel(oModel, "local");
        //         }.bind(this)
        //     });
        // },

        onContinue: function () {
           this.oRouter.navTo("RoutePhoneDetails");
           
        },

        onBack: function () {
            window.history.go(-1);
        },

        onStartOver: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Routewelcome");
        }
    });
});