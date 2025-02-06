sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/UIComponent"
], function (Controller, filter, FilterOperator) {
    "use strict";

    return Controller.extend("assignmentfifth.controller.OrderDetails", {
        onInit: function () {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this.oRouter.getRoute("RouteOrderDetails").attachPatternMatched(this.onRouteMatched, this);
        },

        onSearch:function(oEvent){
            var SearchText = oEvent.getSource().getValue()
            // console.log(SearchText);

            var oList = this.byId("")
            
        },

        onRouteMatched: function (oEvent) {
            var OrderID = oEvent.getParameter("arguments").OrderID;
            this.byId("orderNo").setText("Order: " + OrderID);

            console.log("your order Node. is" + OrderID);

            var productTable = this.byId("productTable")
            var productBinding = productTable.getBinding("items")

            var productFilter = new filter("OrderID", FilterOperator.EQ, OrderID)
            
            productBinding.filter([productFilter])
            

            // Retrieve order details using the orderNo
            // this.getOrderDetails(orderNo);
        },

        onBack: function() {
            window.history.go(-1)
        },

        onNext: function(oEvent) {

            var oItem = oEvent.getSource()
            var oBindingContext = oItem.getBindingContext()
            var productId = oBindingContext.getProperty("ProductID")

            console.log("product Id:" + productId)           
            
            this.oRouter.navTo("RouteProductDetails", {productId: productId});
        },

    });
});