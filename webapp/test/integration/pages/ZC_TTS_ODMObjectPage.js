sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'timesheetodm',
            componentId: 'ZC_TTS_ODMObjectPage',
            contextPath: '/ZC_TTS_ODM'
        },
        CustomPageDefinitions
    );
});