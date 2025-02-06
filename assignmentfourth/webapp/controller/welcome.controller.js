// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ], (Controller) => {
//     "use strict";

//     return Controller.extend("assignmentfourth.controller.welcome", {
//         onInit() {
//         }
//     });
// });
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("assignmentfourth.controller.welcome", {
        onInit: function () {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this)

        },

        onPickupPress: function () {
            // Navigate to pickup flow
            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.navTo("pickup");
            this.oRouter.navTo("Routepickup")
            // alert("kese ho")
        },

        onDropoffPress: function () {
            // Navigate to dropoff flow
            // var oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.navTo("RouteInbound");
        }
    });
});