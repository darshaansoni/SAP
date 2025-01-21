sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
 
    return Controller.extend("assignmenttwo.controller.View1", {
        onInit() {
        },
        onSiteChange:function(){
            this.byId("docType").setVisible(true)
            this.byId("docLabel").setVisible(true)
            const site=this.byId("selectSite").getSelectedKey()
            this.byId("ProposedNumber").setValue(site)
        },
        onDocChange:function(){
            this.byId("depType").setVisible(true)
            this.byId("depLabel").setVisible(true)
            const docType=this.byId("docType").getSelectedKey()
            const input=this.byId("ProposedNumber").getValue()
            this.byId("ProposedNumber").setValue(input+docType)          
        },
        onDepChange:function(){
            this.byId("cusUpdate").setVisible(true)
            this.byId("cusLabel").setVisible(true)
            const depType=this.byId("depType").getSelectedKey()
            const input=this.byId("ProposedNumber").getValue()
            this.byId("ProposedNumber").setValue(input+depType)
        },
        cusChange:function(){
            const cus=this.byId("cusUpdate").getSelectedKey()
            const input=this.byId("ProposedNumber").getValue()
            this.byId("ProposedNumber").setValue(input+cus)
        },
        onNext:function(){
            const site=this.byId("selectSite").getSelectedKey()
            const docType=this.byId("docType").getSelectedKey()
            const depType=this.byId("depType").getSelectedKey()
           
            if(site=="" || docType=="" || depType==""){
                alert("All field are required")
            }
            else{
                let randomNumber=0
                for(let i=0;i<5;i++){
                    var num=Math.random(0,9)
                    randomNumber+=num
                }
                const input=this.byId("ProposedNumber").getValue()
                let random=input+Math.floor(randomNumber*100000)
                this.byId("DocumentNumber").setValue(random)
                this.byId("documentLabel").setVisible(true)
                this.byId("DocumentNumber").setVisible(true)
 
            }
 
        }
    });
});
 