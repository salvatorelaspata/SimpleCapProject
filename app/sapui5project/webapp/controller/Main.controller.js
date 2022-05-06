sap.ui.define(
  ["sap/ui/core/mvc/Controller", "fiori/sapui5/sapui5project/utils/odataproxy"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, odataproxy) {
    "use strict";

    return Controller.extend("fiori.sapui5.sapui5project.controller.Main", {
      onInit: function () {
        // const oModel = this.getOwnerComponent().getModel();
        // oModel.read("/catalog/Books", {
        //   success: function (oData, res) {
        //     debugger;
        //   },
        //   error: function (err) {
        //     debugger;
        //   },
        // });
        const a = odataproxy;
        a.read("/catalog/Books", {
          success: function (oData, res) {
            debugger;
          },
          error: function (err) {
            debugger;
          },
        });
        a.read("/catalog/Books(1)", {
          success: function (oData, res) {
            debugger;
          },
          error: function (err) {
            debugger;
          },
        });
        $.ajax({
          url: "/catalog/Books",
          method: "GET",
          success: function (data, res) {
            debugger;
          },
          error: function (err) {
            debugger;
          },
        });
      },
      getRuntimeBaseURL: function () {
        var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
        var appPath = appId.replaceAll(".", "/");
        var appModulePath = jQuery.sap.getModulePath(appPath);
        return appModulePath;
      },
    });
  }
);
