sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'timesheetodm',
            componentId: 'ZC_TTS_ODMList',
            contextPath: '/ZC_TTS_ODM'
        },
        CustomPageDefinitions
    );
});