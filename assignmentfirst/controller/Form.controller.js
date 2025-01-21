sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'

],function(Controller,MessageToast)
    {
       'use strict';
        return Controller.extend("assignmentfirst.controller.Form",{
            onSubmit:()=>{
                alert("form sumbitted")
                MessageToast.show("your response is recorded")
            }
        });
    });