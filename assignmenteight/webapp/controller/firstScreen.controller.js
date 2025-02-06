// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ], (Controller) => {
//     "use strict";

//     return Controller.extend("assignmenteight.controller.firstScreen", {
//         onInit() {
//         }
//     });
// });
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("assignmenteight.controller.firstScreen", {
        onInit: function () {
            // Get app version from manifest
            var oManifest = this.getOwnerComponent().getManifest();
            var sVersion = oManifest["sap.app"].applicationVersion.version;
            this.getView().setModel(new sap.ui.model.json.JSONModel({
                appVersion: "v" + sVersion
            }));
        }
    });
});