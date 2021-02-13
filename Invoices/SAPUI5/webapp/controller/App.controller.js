// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast, Models) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.App", {

            onInit: function () {

                /**se comenta el contenido de onInit porq se mueve la lógica a Component.js init 

                //obtiene instancia de la vista y le asigna modelo
                this.getView().setModel(Models.createRecipient());

                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName : "logaligroup.SAPUI5.i18n.i18n"});
                this.getView().setModel(i18nModel, "i18n");

                */
            },

            onShowHello: function () {
               // MessageToast.show("Hellow world desde Message Toast")
               //read text from i18n
               var oBundle = this.getView().getModel("i18n").getResourceBundle();
               //read property from data model (json)
               var sRecipient = this.getView().getModel().getProperty("/recipient/name");
               var sMsg = oBundle.getText("helloMsg", [sRecipient]);
               MessageToast.show(sMsg);
            }
        });

    });