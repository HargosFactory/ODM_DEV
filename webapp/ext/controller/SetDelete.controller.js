sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/mvc/ControllerExtension",
  "sap/m/MessageBox",
  "sap/m/MessageToast",
  "sap/ushell/Container"
], function(Controller,ControllerExtension, MessageBox, MessageToast, Messaging, Message, MessageType, Log, Container ) {
    'use strict';

    return ControllerExtension.extend("saisieodm.ext.controller.SetDelete", {
        /**
         * Generated event handler.
         *
         * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
         * @param aSelectedContexts the selected contexts of the table rows.
         */
        buttonPressed: function() {
				MessageBox.show("Button pressed!");
			},
        setdeleteaction: function(oEvent, oContext, aSelectedContexts) {
            console.log('Context:', oContext);
            console.log('oEvent:', oEvent);
            console.log('This:', this);
            console.log('This ovent source:', oEvent.getSource());
            console.log('This ovent source bind context:', oEvent.getSource().getBindingContext());
            console.log('This Extension API:', this.base.getExtensionAPI());
//            console.log('This get View get binding context:', this.getView().getBindingContext());
//            console.log('This get View:', this.base.getView());

/*            let oSelectedContext = aSelectedContexts && aSelectedContexts.length > 0 ? aSelectedContexts[0] : oContext;
            if (!oSelectedContext) {
                MessageBox.error("Aucune ligne sélectionnée");
                return;
            }
*/
            let oSelectedContext = oEvent.getSource().getBindingContext();
            let oModel = this.base.getModel();
            console.log('Model:', oModel);

            let sAction = 'com.sap.gateway.srvd.zui_tts_odm_o4.v0001.setDelete(...)';
            let oBinding = oModel.bindContext(sAction, oSelectedContext);
            console.log('oBinding:', oBinding);

            MessageBox.confirm("Voulez-vous supprimer ?",{
                onClose: function (sButton) {
                    if (sButton === MessageBox.Action.OK) {
                        oBinding.invoke().then(function () {
                            // Refresh automatique des tables
                            const tableIDs = [
                                "saisieodm::ZC_TTS_ODMList--fe::table::ZC_TTS_ODM::LineItem-innerTable"
                            ];
                            tableIDs.forEach(id => {
                                const table = sap.ui.getCore().byId(id);
                                if (table?.getBinding("items")) {
                                    table.getBinding("items").refresh();
                                }
                            });
                            MessageToast.show("Suppression faite avec succès");
                        }).catch(function (oError) {
                            console.error("Error:", oError);
//                          let sErrorMessage = oError?.error?.message || "Erreur inconnue";
                            MessageBox.error(oError?.error?.message || "Erreur inconnue");
                        });
                    }
                }
            });
        },

			// This section allows to extend lifecycle hooks or override public methods of the base controller
			override: {
				routing: {
					onBeforeNavigation: function (oContextInfo) {
						//Custom code
					}
				},
				editFlow: {
					onBeforeDelete: function (oParameters) {
						//Custom code
					}
				}
			}
    }
    )
});