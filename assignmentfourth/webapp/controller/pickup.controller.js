sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/message/Message",
    "sap/ui/core/MessageType",
    "sap/m/MessageBox"
], function (Controller, JSONModel, MessageToast, Message, MessageType, MessageBox) {
    "use strict";

    return Controller.extend("assignmentfourth.controller.pickup", {
        onInit: function () {
            // // Initialize view model
            // var oViewModel = new JSONModel({
            //     isContinueEnabled: false
            // });
            // this.getView().setModel(oViewModel, "viewModel");
            
            // // Initialize message model
            // var oMessageManager = sap.ui.getCore().getMessageManager();
            // this.getView().setModel(oMessageManager.getMessageModel(), "messages");

            // // Load shipment data
            // this._loadShipmentData();

            var oModel = new JSONModel("model/data.json");
            this.getView().setModel(oModel,"LocalData");

            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this)

        },

        // _loadShipmentData: function() {
        //     var that = this;
        //     $.ajax({
        //         url: "model/data.json",
        //         dataType: "json",
        //         success: function(oData) {
        //             that.shipmentData = oData.shipments;
        //         },
        //         error: function() {
        //             MessageToast.show("Error loading shipment data");
        //         }
        //     });
        // },

        // onShipmentInputChange: function (oEvent) {
        //     var sValue = oEvent.getParameter("value");
        //     var oViewModel = this.getView().getModel("viewModel");
        //     var oInput = this.byId("shipmentInput");
            
        //     // Clear previous messages
        //     sap.ui.getCore().getMessageManager().removeAllMessages();
            
        //     // Validate input
        //     if (!/^\d{0,8}$/.test(sValue)) {
        //         oInput.setValue(sValue.replace(/[^\d]/g, '').slice(0, 8));
        //         sap.ui.getCore().getMessageManager().addMessages(
        //             new Message({
        //                 message: "Please enter numbers only",
        //                 type: MessageType.Error,
        //                 target: oInput.getId()
        //             })
        //         );
        //     }
            
        //     // Enable/disable continue button
        //     oViewModel.setProperty("/isContinueEnabled", /^\d{8}$/.test(sValue));
        // },

        onContinue: function () {
            // var sShipmentId = this.byId("shipmentInput").getValue();
            // console.log(sShipmentId);
            // const oModel = this.getView().getModel("LocalData")
            
            // const aShipments = oModel.getProperty("/Shipments");
           
            // Get all shipment IDs and check if entered ID exists
            // const allShipmentIds = aShipments.map(ship => ship.ShipmentID);
           
            // if(sShipmentId.length === 8 && allShipmentIds.includes(parseInt(sShipmentId))) {
            //     this.oRouter.navTo("Routeconfirmation")
            // }
            // else {
            //     MessageBox.error("Invalid or not found shipment ID");
            // }

            // Validate shipment against local data
            // this._validateShipment(sShipmentId);
                this.oRouter.navTo("Routeconfirmation");
            
        },
        
        // onContinue: function(){
        //     this.oData.navTo("RouteshipmentConfirmation")
        // },

        // _validateShipment: function (sShipmentId) {
        //     if (this.shipmentData && this.shipmentData[sShipmentId]) {
        //         // Navigate to confirmation page
        //         var oRouter = this.getOwnerComponent().getRouter();
        //         oRouter.navTo("loadConfirmation", {
        //             shipmentId: sShipmentId
        //         });
        //     } else {
        //         // Show error message
        //         MessageToast.show("Invalid shipment number. Please verify and try again.");
        //     }
        // },

        onNoShipmentId: function () {
            MessageBox.warning("A shipment ID number is required to check in \n please check with your dispatcher to obtain this number ", { 
                actions: ["Back"]
            });
        },

        onBack: function () {
            window.history.go(-1);
        },

        onRequestHelp: function () {
            MessageBox.information("if you need assistance , please call one of the numbers listed - \n 6 am - 2 pm    982-611-8947 \n 2 pm - 10 pm    982-611-8947 \n 10 pm - 6 am    982-611-8947", {
                actions: ["Back"]
            });
        }
    });
});