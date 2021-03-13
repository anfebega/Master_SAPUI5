// @ts-nocheck
/* eslint-disable no-undef */
/*global Qunit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require([
        "logaligroup/SAPUI5/test/unit/allTests"
    ], function () {
        QUnit.start();
    })
});