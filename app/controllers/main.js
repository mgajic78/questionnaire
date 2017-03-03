var app = angular.module('questionnaire', ['ngRoute']);

var getTemplatePath = function(templateName) {
    return 'app/templates/' + templateName + '.html';
}

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: getTemplatePath('main')
      })
      .when('/control-panel', {
          templateUrl: getTemplatePath('control-panel'),
          controller: 'controlPanelCtrl'
      })
      .otherwise({
          redirectTo: '/'
      });
});