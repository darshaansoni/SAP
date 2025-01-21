sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/message/Message",
    "sap/ui/core/MessageType"
], function (Controller, JSONModel, MessageToast, Message, MessageType) {
    "use strict";

    return Controller.extend("", {
        onInit: function () {
            // Initialize view model
            var oViewModel = new JSONModel({
                isContinueEnabled: false
            });
            this.getView().setModel(oViewModel, "viewModel");
            
            // Initialize message model
            var oMessageManager = sap.ui.getCore().getMessageManager();
            this.getView().setModel(oMessageManager.getMessageModel(), "messages");
        },

        onShipmentInputChange: function (oEvent) {
            var sValue = oEvent.getParameter("value");
            var oViewModel = this.getView().getModel("viewModel");
            var oInput = this.byId("shipmentInput");
            
            // Clear previous messages
            sap.ui.getCore().getMessageManager().removeAllMessages();
            
            // Validate input
            if (!/^\d{0,8}$/.test(sValue)) {
                oInput.setValue(sValue.replace(/[^\d]/g, '').slice(0, 8));
                sap.ui.getCore().getMessageManager().addMessages(
                    new Message({
                        message: "Please enter numbers only",
                        type: MessageType.Error,
                        target: oInput.getId()
                    })
                );
            }
            
            // Enable/disable continue button
            oViewModel.setProperty("/isContinueEnabled", /^\d{8}$/.test(sValue));
        },

        onContinue: function () {
            var sShipmentId = this.byId("shipmentInput").getValue();
            
            // Call backend service to validate shipment
            this._validateShipment(sShipmentId);
        },

        _validateShipment: function (sShipmentId) {
            // Simulate backend call
            var that = this;
            
            // Replace this with actual service call
            this.getOwnerComponent().getModel().callFunction("/ValidateShipment", {
                method: "GET",
                urlParameters: {
                    ShipmentId: sShipmentId
                },
                success: function(oData) {
                    if (oData.Valid && !oData.IsGoodsIssued) {
                        // Navigate to confirmation page
                        var oRouter = that.getOwnerComponent().getRouter();
                        oRouter.navTo("loadConfirmation", {
                            shipmentId: sShipmentId
                        });
                    } else {
                        // Show error message
                        MessageToast.show(
                            oData.IsGoodsIssued ? 
                            "This shipment has already been processed." :
                            "Invalid shipment number. Please verify and try again."
                        );
                    }
                },
                error: function() {
                    MessageToast.show("Error validating shipment. Please try again.");
                }
            });
        },

        onNoShipmentId: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("noShipmentId");
        },

        onBack: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("checkin");
        },

        onRequestHelp: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("help");
        }
    });
});