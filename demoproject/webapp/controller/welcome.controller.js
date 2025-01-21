sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("demoproject.controller.welcome", {
        onInit() {

            // var jsonData = {
            //     "Employees":[
            //         {
            //             "Id": 1,
            //             "Name": "Darshan"
            //         },
            //         {
            //             "Id": 2,
            //             "Name": "Gagan"
            //         },
            //         {
            //             "Id": 3,
            //             "Name": "Ananya"
            //         }
            //     ]
            // }

            // var oModel = new JSONModel();
            // oModel.setData(jsonData);
            // oModel.loadData("/model/data.json")
            // this.getView().setModel(oModel);
        },
        onPress: function(){
            var oModel = new JSONModel();
            // oModel.setData(jsonData);
            oModel.loadData("/model/data.json")
            this.getView().setModel(oModel);
        }
    });
});