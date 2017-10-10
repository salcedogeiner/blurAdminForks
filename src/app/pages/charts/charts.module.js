/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('Kronos.pages.charts', [
            'Kronos.pages.charts.amCharts',
            'Kronos.pages.charts.chartJs',
            'Kronos.pages.charts.chartist',
            'Kronos.pages.charts.morris'
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('charts', {
                url: '/charts',
                abstract: true,
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                title: 'Charts',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 150,
                },
            });
    }

})();