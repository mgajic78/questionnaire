app.directive('questionsConfig', function () {
    
    return {
        restrict: 'E',
        templateUrl: getTemplatePath('questions-config'),
        scope:true
    };
});

app.controller('QuestionsConfigCtrl', ['$scope', function ($scope) {

    $scope.questions = [];
    $scope.newQuestion = 'TEST';

    $scope.addQuestion = function () {

        $scope.questions.push($scope.newQuestion);
    };
}]);