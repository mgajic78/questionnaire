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

        if ($scope.questions.indexOf($scope.newQuestion) === -1) {

            $scope.questions.push($scope.newQuestion);
        }
    };
}]);