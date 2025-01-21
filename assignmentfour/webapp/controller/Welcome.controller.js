sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("assignmentfour.controller.Welcome", {
        onInit: function () {
            // Initialization code if needed
        },

        onPickupPress: function () {
            // Navigate to pickup flow
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("pickup");
        },

        onDropoffPress: function () {
            // Navigate to dropoff flow
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("dropoff");
        }
    });
});