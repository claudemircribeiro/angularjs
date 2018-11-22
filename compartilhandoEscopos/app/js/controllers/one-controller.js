angular.module("app").controller('OneController', function ($scope, Scopes) {
 
    Scopes.store('OneController', $scope);
 
    $scope.variable1 = "One";
 
    $scope.buttonClick = function () {
        console.log("OneController");
        console.log("OneController::variable1", Scopes.get('OneController').variable1);
        console.log("TwoController::variable1", Scopes.get('TwoController').variable1);
        console.log("$scope::variable1", $scope.variable1);
    };
 
    $scope.buttonClickOnTwoController = function () {
        Scopes.get('TwoController').buttonClick();
    };
});