// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ], (Controller) => {
//     "use strict";

//     return Controller.extend("assignmentfour.controller.View1", {
//         onInit() {
//         }
//     });
// });

// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ], function (Controller) {
//     "use strict";

//     return Controller.extend("assignmentfour.controller.View1", {
//         onInit: function () {
//             // Initialization code if needed
//         },

//         onPickupPress: function () {
//             // Navigate to pickup flow
//             var oRouter = this.getOwnerComponent().getRouter();
//             oRouter.navTo("pickup");
//         },

//         onDropoffPress: function () {
//             // Navigate to dropoff flow
//             var oRouter = this.getOwnerComponent().getRouter();
//             oRouter.navTo("dropoff");
//         }
//     });
// });