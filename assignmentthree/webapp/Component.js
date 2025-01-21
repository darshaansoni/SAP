sap.ui.define([
    "sap/ui/core/UIComponent",
    "assignmentthree/model/models",
    "sap/ui/model/json/JSONModel"
 
], (UIComponent, models,JSONModel) => {
    "use strict";

    return UIComponent.extend("assignmentthree.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();

            var oModel= new JSONModel()
            oModel.loadData("/model/data.json")
            this.setModel(oModel,"LocalData");
 
        }
    });
});