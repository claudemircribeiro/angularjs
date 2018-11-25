angular.module("app").config(function($routeProvider){
	$routeProvider.when("/compartEscop",{
		templateUrl : "view/compartilhandoEscopos/compartEscopo.html"
			});
	$routeProvider.when("/checkBoxes",{
		templateUrl : "view/checkboxes/checkBoxes.html"

	});

	$routeProvider.otherwise({redirectTO: "/index"});
});