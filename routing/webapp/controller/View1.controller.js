sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("routing.controller.View1", {
        onInit() {
            this._oRouter = sap.ui.core.UIComponent.getRouterFor(this)
        },
        onNavToView2: function(){
            var inputValue = this.getView().byId("input").getValue();

            this._oRouter.navTo("RouteView2",{
                parameter: inputValue
            })



        }
    
    });
});


