sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("assignmentfourth.controller.PhoneDetails", {
        onInit() {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this)
        },
        continue:function(){
            
           

            const firstPart = this.byId("phoneFirst").getValue();
            const secondPart = this.byId("phoneSecond").getValue();
            const thirdPart = this.byId("phoneThird").getValue();
 
            // Validate all parts
            if (firstPart.length === 3 && secondPart.length === 3 && thirdPart.length === 4) {
                const fullPhoneNumber = `${firstPart}-${secondPart}-${thirdPart}`;
                console.log("Phone Number:", fullPhoneNumber);
                
                this.oRouter.navTo("RouteTrailerType");
                this.byId("phoneFirst").setValue(" ");
                this.byId("phoneSecond").setValue(" ");
                this.byId("phoneThird").setValue(" ");
               
            } else {
                MessageBox.error("Please enter a valid 10-digit phone number");
            }
            
            // if(no != null){
            //     if(no.length === 10){
            //         MessageBox.Confirm("you entered:- " + no)
            //     }
            //     else{
            //         MessageBox.error("Enter a 10 digit number")
            //     }
            // }
            // else if(no == nul){
            //     this.oRouter.navTo("RouteWelcomeScreen") 
            // }
        },
        back:function(){
            window.history.go(-1)
        },
        goHome:function(){
            this.oRouter.navTo("")
        },
        goToWelcome:function(){
            this.oRouter.navTo("Routewelcome")            
        },
        onPhoneChange: function(oEvent) {
            const input = oEvent.getSource();
            const value = input.getValue();
            const id = input.getId();
 
            // Remove any non-numeric characters
            const numericValue = value.replace(/[^\d]/g, '');
            input.setValue(numericValue);
 
            // Handle auto-focus based on input length
            if (id.endsWith("phoneFirst") && numericValue.length === 3) {
                this.byId("phoneSecond").focus();
            } else if (id.endsWith("phoneSecond") && numericValue.length === 3) {
                this.byId("phoneThird").focus();
            }
        }

    });
});