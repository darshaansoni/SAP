sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageToast"
], function (Controller) {
    "use strict";

    return Controller.extend("assignmentfifth.controller.ProductDetails", {
        onInit: function () {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this.oRouter.getRoute("RouteProductDetails").attachPatternMatched(this.onRouteMatched, this);
        },

        onRouteMatched: function (oEvent) {

            var ProductId = oEvent.getParameter("arguments").productId;
            this.byId("productId").setText("Product Id:- " + ProductId)

            // Get the OData model from the manifest
            var oModel = this.getView().getModel(); 
            this.getView().setModel(oModel); 

            // Bind the product details to the view
            var sPath = "/Products(" + ProductId + ")";
            this.getView().bindElement(sPath); 
        },


        async SupplierPopover(oEvent) {
            var ProductId = oEvent.getParameter("arguments").productId;
            console.log(ProductId);
            if (!this.popover) {
                this.popover = await this.loadFragment({
                    name: "project5.view.Fragment.Popover"
                });
                
                this.getView().addDependent(this.popover);
            }
            
            this.popover.openBy(this.getView().byId("SupplierPopover"));
        },
        

        onClosePopover:function(){
            this.popover.close()
        },

        onBack: function () {
            window.history.go(-1);
        }
    });
});