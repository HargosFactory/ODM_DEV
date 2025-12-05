sap.ui.define([
    "sap/ushell/Container",
    "sap/m/MessageBox"
], function(Container, MessageBox) {
    'use strict';

    // Generic navigation function to handle navigation
        async function navigateToMainApp(semanticObject, action) {
            const Navigation = await Container.getServiceAsync("Navigation");

            try {
                // Perform the navigation to the specified target
                const navigationParams = {
                    target: {
                        semanticObject: semanticObject,
                        action: action
                    }
                };
                await Navigation.navigate(navigationParams);
            } catch (error) {
                // Log error if navigation fails
                console.error(`Unable to open ${semanticObject} confirmation. Error: ${error.message}`);
            }
        }

        return {
            postConfirmation: async function (oEvent, oContext) {
                console.log('THIS:', this)
                let oModel = this.getModel();
                console.log('model: ', oModel)
                let oSelectedContext = this.getBindingContext()
                console.log('context: ', oSelectedContext)

                let sAction = 'com.sap.gateway.srvd.zui_tts_odm_o4.v0001.post(...)';
                let oBinding = oModel.bindContext(sAction, oSelectedContext);

                oBinding.invoke().then(function () {
                    MessageBox.success("Données envoyées à SAP avec succès",{
                        onClose: function () {
                        navigateToMainApp("odmsaisie", "manage");
                        }
                });

                }).catch(function (oError) {
                    console.error("Error:", oError);
                    let sErrorMessage = oError?.error?.message || "Error";
                    MessageBox.error(sErrorMessage, {
                        title: "Error"
                    });
                }.bind(this));
            }
        };
    });