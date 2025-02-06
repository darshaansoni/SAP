// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ], (Controller) => {
//     "use strict";

//     return Controller.extend("assignmentthree.controller.Main", {
//         onInit() {
//         }
//     });
// });
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";
 
    return Controller.extend("assignmentthree.controller.Main", {
        onInit() {
        },
        itemChange: function(oEvent) {
            this.getView().byId("detail").setVisible(true);
            var oSelectedItem = oEvent.getParameter("listItem");
            if (oSelectedItem) {
                var oContext = oSelectedItem.getBindingContext("LocalData");
                var oData = oContext.getObject();
                this.getView().byId("firstName").setText(oData.FirstName);
                this.getView().byId("lastName").setText(oData.LastName);
                this.getView().byId("gender").setText(oData.Gender);
                this.getView().byId("designation").setText(oData.Designation);
                this.getView().byId("grade").setText(oData.Grade);
                this.getView().byId("empId").setText(oData.EmployeeID);
 
                this.getView().byId("dob").setText(oData.Dateofbirth);
                this.getView().byId("fatherName").setText(oData.Fathersname);
                this.getView().byId("mothermaidname").setText(oData.MotherMaidenname);
 
                this.getView().byId("contact").setText(oData.Phonenumber);
                this.getView().byId("alternate").setText(oData.Alternativenumber);
                this.getView().byId("email").setText(oData.Emailaddress);
 
                this.getView().byId("odesignation").setText(oData.Designation);
                this.getView().byId("skillset").setText(oData.Skillset);
                this.getView().byId("doj").setText(oData.Dateofjoining);
 
 
               
            }
           
        },
        onSearch: function(oEvent) {
            var sQuery = oEvent.getParameter("newValue");
            var oList = this.byId("idList");
            var oBinding = oList.getBinding("items");
            var oFilter = null;
            if (sQuery) {
                oFilter = new sap.ui.model.Filter("FirstName", sap.ui.model.FilterOperator.Contains, sQuery);
            }
            oBinding.filter(oFilter);
        }
     
    });
});
 