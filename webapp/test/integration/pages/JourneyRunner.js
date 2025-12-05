sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"timesheetodm/test/integration/pages/ZC_TTS_ODMList",
	"timesheetodm/test/integration/pages/ZC_TTS_ODMObjectPage"
], function (JourneyRunner, ZC_TTS_ODMList, ZC_TTS_ODMObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('timesheetodm') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_TTS_ODMList: ZC_TTS_ODMList,
			onTheZC_TTS_ODMObjectPage: ZC_TTS_ODMObjectPage
        },
        async: true
    });

    return runner;
});

