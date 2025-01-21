// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ], (Controller) => {
//     "use strict";

//     return Controller.extend("assignmentfifth.controller.MainView", {
//         onInit() {
//         }
//     });
// });

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
  ], function(Controller, JSONModel, Filter, FilterOperator) {
    "use strict";
    
    return Controller.extend("assignmentfifth.controller.MainView", {
      onInit: function() {
        // Initialize OData model
        var oModel = new sap.ui.model.odata.v2.ODataModel("https://services.odata.org/V2/Northwind/Northwind.svc/");
        this.getView().setModel(oModel);
      },
      
      formatDate: function(date) {
        if (!date) return "";
        return new Date(date).toLocaleDateString();
      },
      
      onSearch: function() {
        var aFilters = [];
        var employeeId = this.byId("employeeIdFilter").getValue();
        var city = this.byId("cityFilter").getValue();
        var country = this.byId("countryFilter").getValue();
        var region = this.byId("regionFilter").getValue();
        
        if (employeeId) {
          aFilters.push(new Filter("EmployeeID", FilterOperator.EQ, employeeId));
        }
        if (city) {
          aFilters.push(new Filter("City", FilterOperator.Contains, city));
        }
        if (country) {
          aFilters.push(new Filter("Country", FilterOperator.Contains, country));
        }
        if (region) {
          aFilters.push(new Filter("Region", FilterOperator.Contains, region));
        }
        
        var oTable = this.byId("employeeTable");
        var oBinding = oTable.getBinding("items");
        oBinding.filter(aFilters);
      }
    });
  });