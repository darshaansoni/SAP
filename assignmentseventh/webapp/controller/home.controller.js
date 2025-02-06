sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("assignmentseventh.controller.home", {
        onInit: function () {
            var oModel = new JSONModel("/model/data.json")
            this.getView().setModel(oModel, "LocalData")
 
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            
            // Initialize the model
            var oModel = new JSONModel({
                selectedKey: "home"
            });
            // this.getView().setModel(oModel);

            // Set initial content
            this._setMainContent("home");
        },

        onSideNavTogglePress: function () {
            var oToolPage = this.byId("toolPage");
            var bSideExpanded = oToolPage.getSideExpanded();
            oToolPage.setSideExpanded(!bSideExpanded);
        },

        onNavigationItemSelect: function (oEvent) {
            var sKey = oEvent.getParameter("item").getKey();
            this._setMainContent(sKey);
        },

        _setMainContent: function (sKey) {
            var oMainContents = this.byId("mainContents");
            
            // Clear existing pages
            oMainContents.removeAllPages();

            // Add new page based on selection
            switch (sKey) {
                case "home":
                    oMainContents.addPage(new sap.m.Page({
                        title: "Logged in employee details",
                        content: [
                            new sap.m.Text({ text: "Darshan.soni@yash.com"}),
                            new sap.m.Text({text:"Emp ID - 1100725"}),
                            
                        ]
                    }));
                    break;
                case "language":
                    oMainContents.addPage(new sap.m.Page({
                        title: "Languages",
                        content: [new sap.m.Text({ text: "Abhi ye kuch ni show karega" })]
                    }));
                    break;
                case "appversion":
                    // oMainContents.addPage(new sap.m.Page({
                    //     title: "Application version",
                        
                    // }))
                    var sVersion = this.getOwnerComponent().getManifest()["sap.app"].sourceTemplate.version;
                    oMainContents.addPage(new sap.m.Page({
                        title: "Application Version",
                        content: [
                            new sap.m.Text({ 
                                text: "Current Version: " + sVersion
                            })
                        ]
                    }));
                    break;
                case "employees":
                    this._loadEmployeeData();
                    break;
                // Add other cases as needed
            }
        },
        _loadEmployeeData: function () {
            var oModel = this.getView().getModel("LocalData");
            var aEmployees = oModel.getProperty("/results");
        
            var oTable = new sap.m.Table({
                mode:"SingleSelect",
                // selectionChange: this.onSelectionChange.bind(this), // Bind the selection change event
                columns: [
                    new sap.m.Column({ header: new sap.m.Label({ text: "First Name" }) }),
                    new sap.m.Column({ header: new sap.m.Label({ text: "Last Name" }) }),
                    new sap.m.Column({ header: new sap.m.Label({ text: "Title" }) }),
                    new sap.m.Column({ header: new sap.m.Label({ text: "Birthdate" }) }),
                    new sap.m.Column({ header: new sap.m.Label({ text: "Hiredate" }) }),
                    new sap.m.Column({ header: new sap.m.Label({ text: "address" }) }),
                    new sap.m.Column({ header: new sap.m.Label({ text: "city" }) }),
                    new sap.m.Column({ header: new sap.m.Label({ text: "Region" }) }),
                    new sap.m.Column({ header: new sap.m.Label({ text: "Country" }) }),
                ]
                
            });

            var totalEmployees = aEmployees.length;

            aEmployees.forEach(function (employee) {
                oTable.addItem(new sap.m.ColumnListItem({
                    cells: [
                        new sap.m.Text({ text: employee.FirstName }),
                        new sap.m.Text({ text: employee.LastName }),
                        new sap.m.Text({ text: employee.Title }),
                        new sap.m.Text({ text: employee.BirthDate }),
                        new sap.m.Text({ text: employee.HireDate }),
                        new sap.m.Text({ text: employee.Address }),
                        new sap.m.Text({ text: employee.City }),
                        new sap.m.Text({ text: employee.Region}),
                        new sap.m.Text({ text: employee.Country}),
                    ]
                }));
            });

            // Create a Text control to display the total number of employees
            var oTotalText = new sap.m.Text({
                text: "Total Employees: " + totalEmployees
            });
            // Create a Delete User button
            var oDeleteButton = new sap.m.Button({
                text: "Delete User",
                press: this.onDeleteUser.bind(this)
                
            });
            // Create a add User button
            var oAddButton = new sap.m.Button({
                text: "add User",
                press: this.onAddUser.bind(this)
                
            });
            // Create a Sorting  button
            var oSortingButton = new sap.m.Button({
                text: "Sorting",
                press: this.onSorting.bind(this)
                
            });
            // Create a Setting icon  button
            var oSettingButton = new sap.m.Button({
                text: "Setting Icon",
                press: this.onSetting.bind(this)
            });
            // Create a Next button
            var oNextButton = new sap.m.Button({
                text: "Next",
                press: this.onNext.bind(this)
            });
            // Create an OverflowToolbar
            var oOverflowToolbar = new sap.m.OverflowToolbar({
                
                content: [oTotalText,oDeleteButton,oAddButton,oSortingButton,oSettingButton,oNextButton],
                
            });
            

            var oPage = new sap.m.Page({
                title: "Employee List",
                headerContent: [oOverflowToolbar], // Add the OverflowToolbar to the header
                content: [oTable] // Add the table to the content
            });
            
            this.byId("mainContents").addPage(oPage);
        },
        
        onDeleteUser: function(){
            sap.m.MessageToast.show("Delete User button pressed.");

        },

        onAddUser: function(){
            sap.m.MessageToast.show("add User button pressed.");

        },

        onSorting: function(){
            sap.m.MessageToast.show("Sorting button pressed.");

        },
        onSetting: function(){
            sap.m.MessageToast.show("Setting button pressed.");

        },
        // Event handler for selection change
        // onSelectionChange: function (oEvent) {
        //     var oSelectedItem = oEvent.getParameter("selectedItem");
        //     this.oNextButton.setEnabled(!!oSelectedItem); // Enable the Next button if an item is selected
        // },
        onNext: function () {
            // Get the table control
            // var oTable = this.byId("mainContents").getPages()[0].getContent()[0]; // Assuming the table is the first content of the first page
            // var oSelectedItem = oTable.getSelectedItem(); // Get the selected item from the table
        
            // if (oSelectedItem) {
            //     // Implement the logic for the Next button
            //     var firstName = oSelectedItem.getCells()[0].getText(); // Get the first name of the selected employee
            //     sap.m.MessageToast.show("Next button pressed for: " + firstName );
            // } else {
            //     sap.m.MessageToast.show("No employee selected.");
            this.oRouter.navTo("Routecategory");

            // }
            // alert("kaam krra hu")
        }
    });
});
