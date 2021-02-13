sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (JSONModel) {
        "use strict";

        return {

            createRecipient: function () {
                //crea objeto json con atributo name
                var oData = {
                    recipient: {
                        name: "World"
                    }
                };
                
                //crea objeto modelo con el json anterior
                return new JSONModel(oData);
            }

        }

    });