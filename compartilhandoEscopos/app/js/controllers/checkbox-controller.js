angular.module("app").controller('CheckContr', function ($scope, Scopes,filmesAPI,$filter) {
 $scope.dados = {};
 filmesAPI.getFilmes().success(function(data){
 	$scope.dados.filmes = data;
 });

  $scope.selection = [];

  // Helper method to get selected fruits
  $scope.selectedFilmes = function () {
    return filterFilter($scope.dados.filmes, { selected: true });
  };

 

 $scope.$watch('dados.filmes', function (newObj) {
   $scope.selection = [];
  var checked = $filter('filter')(newObj, {'selected': true}); //checked list
  var unchecked = $filter('filter')(newObj, {'selected': false}); //unchecked list
   
   for (var i=0; i< checked.length; i++) {
      $scope.selection.push(checked[i]); //adding checked labels to type array 
   }
}, true);
	
});