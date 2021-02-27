// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     */
    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.App", {

            onInit: function () {

            },

            onOpenDialogHeader: function () {
                //Invoca al component.js y la función openHelloDialog 
                this.getOwnerComponent().openHelloDialog();
            },

        });

    });