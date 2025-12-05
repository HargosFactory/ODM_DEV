sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "./SetDelete"  // Importe ton module SetDelete
], function(ControllerExtension, SetDelete) {
    "use strict";
    
    return ControllerExtension.extend("saisieodm.ext.controller.ListReportExt", {
        
        // Initialisation - récupère extensionAPI
        override: {
            onInit: function() {
                this.extensionAPI = this.base.getView().getController().extensionAPI;
            }
        },
        
        // Méthode appelée par l'action/bouton
        onSetDeleteAction: function(oContext, aSelectedContexts) {
            // Appelle TA fonction SetDelete avec refresh
            SetDelete.setdelete.call(this, oContext, aSelectedContexts);
        },
        
        // Refresh table (bonus)
        refreshTable: function() {
            if (this.extensionAPI) {
                this.extensionAPI.rebindTable();
            }
        }
    });
});