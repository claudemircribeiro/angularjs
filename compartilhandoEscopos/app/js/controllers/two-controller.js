angular.module("app").controller('TwoController', function ($scope, Scopes) {
 
    Scopes.store('TwoController', $scope);
 
    $scope.variable1 = "Two";
 
    $scope.buttonClick = function () {
        console.log("TwoController");
        console.log("OneController::variable1", Scopes.get('OneController').variable1);
        console.log("TwoController::variable1", Scopes.get('TwoController').variable1);
        console.log("$scope::variable1", $scope.variable1);
    };
 
    $scope.buttonClickOnOneController = function () {
        Scopes.get('OneController').buttonClick();
    };
});