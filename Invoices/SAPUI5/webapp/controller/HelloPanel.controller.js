// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.HelloPanel", {

            onInit: function () {

            },

            onShowHello: function () {
               // MessageToast.show("Hellow world desde Message Toast")
               //read text from i18n
               var oBundle = this.getView().getModel("i18n").getResourceBundle();
               //read property from data model (json)
               var sRecipient = this.getView().getModel().getProperty("/recipient/name");
               var sMsg = oBundle.getText("helloMsg", [sRecipient]);
               MessageToast.show(sMsg);
            },

            onOpenDialog: function () {
                //La logica se mueve a HelloDialog.js que es el ManagedObject y desde allí manejaremos el dialogo
                /** 
                const oView = this.getView();

                if (!this.byId("helloDialog")){
                    Fragment.load({
                        id : oView.getId(),
                        name : "logaligroup.SAPUI5.view.HelloDialog",
                        controller: this
                    }).then(function (oDialog) {

                        oView.addDependent(oDialog);

                        oDialog.open();
                    });
                }else{

                    this.byId("helloDialog").open();

                }
                */

               //Invoca al component.js y la función openHelloDialog 
               this.getOwnerComponent().openHelloDialog();
            },

            onCloseDialog: function() {
                //La logica se mueve a HelloDialog.js que es el ManagedObject y desde allí manejaremos el dialogo
                //this.byId("helloDialog").close();
            }

        });

    });