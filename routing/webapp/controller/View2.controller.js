sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], (Controller) => {
    "use strict";

    return Controller.extend("routing.controller.View2", {
        onInit() {
            this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this._oRouter.getRoute("RouteView2").attachPatternMatched(this._oRouterMatched, this);
        },
        onNavToView1: function(){
            this._oRouter.navTo("RouteView1")

        },
        _oRouterMatched: function(oEvent){
            var argument = oEvent.getParameter("arguments").parameter;
            this.getView().byId("output").setValue(argument)
        },
        onBack: function(){
            const history = History.getInstance();
            const previousHash = history.getpreviousHash();

            if(previousHash !== undefined){
                window.history.go(-1);
            }
            else{

            }

        }
    });
});