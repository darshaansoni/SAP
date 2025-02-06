// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel"
// ], function(Controller, JSONModel) {
//     "use strict";

//     return Controller.extend("assignmentfifth.controller.EmpDetails", {
//         onInit: function() {
//             // var oRouter = this.getOwnerComponent().getRouter();
//             // oRouter.getRoute("RouteEmpDetails").attachPatternMatched(this._onRouteMatched, this);
//         },

//         _onRouteMatched: function(oEvent) {
//             var employeeId = oEvent.getParameter("arguments").employeeId;

//             // Fetch employee data using the employeeId
//             var oModel = this.getView().getModel();
//             oModel.read("/Employees(" + employeeId + ")", {
//                 success: function(oData) {
//                     var oViewModel = new JSONModel(oData);
//                     this.getView().setModel(oViewModel, "employee");
//                 }.bind(this),
//                 error: function(oError) {
//                     // Handle error
//                 }
//             });
//         }
//     });
// });

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast" // Import MessageToast for user notifications
], function(Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("assignmentfifth.controller.EmpDetails", {
        onInit: function() {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this.oRouter.getRoute("RouteEmpDetails").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function(oEvent) {
            var oArgs = oEvent.getParameter("arguments").employeeId;
            // var oView = this.getView();

            var path = "/Employees(" + oArgs + ")"
            this.getView().bindElement(path)

            // Fetch employee data from OData service
            // this.getOwnerComponent().getModel().read("/Employees(" + oArgs + ")", {
            //     urlParameters: {
            //         "$format": "json"
            //     },
            //     success: function(oData) {
            //         var oModel = new JSONModel(oData);
            //         oView.setModel(oModel);
            //     },
            //     error: function(oError) {
            //         console.log("Error fetching employee data: " + oError);
            //         MessageToast.show("Error fetching employee data. Please try again."); // Notify user
            //     }
            // });
        },

        onEdit:function(){
            this.byId("birthInput").setEditable(true)
            this.byId("addressInput").setEditable(true)
            this.byId("cityInput").setEditable(true)
            this.byId("postalInput").setEditable(true)
            this.byId("extensionInput").setEditable(true)
            this.byId("phoneInput").setEditable(true)
        },
        onSave:function(){
            this.byId("birthInput").setEditable(false)
            this.byId("addressInput").setEditable(false)
            this.byId("cityInput").setEditable(false)
            this.byId("postalInput").setEditable(false)
            this.byId("extensionInput").setEditable(false)
            this.byId("phoneInput").setEditable(false)
        },

        onBack:function(){
            window.history.go(-1)
        }
    });
});