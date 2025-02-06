sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("assignmentfifth.controller.MainView", {
      
      onInit: function () {
          // You don't need to initialize anything here since 
          // OData connection is handled in manifest.json
          this.oRouter = sap.ui.core.UIComponent.getRouterFor(this)
      },

      formatter: {
          dateFormatter: function(date) {
              if (!date) return "";
              var oDate = new Date(date);
              return oDate.toLocaleDateString();
          }
      },

      onSearch: function(oEvent) {
          // Get the table reference
          var oTable = this.byId("employeeTable");
          
          // Get filter bar
          var oFilterBar = oEvent.getSource();
          
          // Get values from filter fields
          var sEmployeeID = oFilterBar.getFilterGroupItems()[0].getControl().getValue();
          console.log(sEmployeeID);
          var sCity = oFilterBar.getFilterGroupItems()[1].getControl().getValue();
          var sCountry = oFilterBar.getFilterGroupItems()[2].getControl().getValue();
          var sRegion = oFilterBar.getFilterGroupItems()[3].getControl().getValue();
          
          // Create filters
          var aFilters = [];
          
          // Add filters only if value exists
          if (sEmployeeID) {
              aFilters.push(new Filter("EmployeeID", FilterOperator.EQ, sEmployeeID));
          }
          if (sCity) {
              aFilters.push(new Filter("City", FilterOperator.EQ, sCity));
          }
          if (sCountry) {
              aFilters.push(new Filter("Country", FilterOperator.EQ, sCountry));
          }
          if (sRegion) {
              aFilters.push(new Filter("Region", FilterOperator.EQ, sRegion));
          }
          
          // Get binding and apply filters
          var oBinding = oTable.getBinding("items");
          oBinding.filter(aFilters);
      },
      onPressColumn: function(oEvent){
        var oItem = oEvent.getSource();
        var oBindingContext = oItem.getBindingContext();
        var employeeId = oBindingContext.getProperty("EmployeeID");

        // alert("heyloo")
       
        // Navigate to detail page with employee ID
        this.oRouter.navTo("RouteEmpDetails",{
            employeeId: employeeId
        });
    },
    next:function(){
        //   this.oRouter.navTo("RouteEmpDetails");
      }
  });
});