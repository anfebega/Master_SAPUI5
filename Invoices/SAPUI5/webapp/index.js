// @ts-nocheck
sap.ui.define([
    //"sap/ui/core/mvc/XMLView"
    "sap/ui/core/ComponentContainer"
],  
    //@param {typeof sap.ui.core.mvc.XMLView} XMLView 
    /**     
     * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer 
     */
    function (ComponentContainer) {

        /** Se cambia la lógica cuando se implementa en el component 
        XMLView.create({
            viewName:"logaligroup.SAPUI5.view.App"
        }).then(function (oView){
            oView.placeAt("content");
        });
        */

        new ComponentContainer({
            name: "logaligroup.SAPUI5",
            settings: {
                id : "SAPUI5"
            },
            async : true
        }).placeAt("content");
    });