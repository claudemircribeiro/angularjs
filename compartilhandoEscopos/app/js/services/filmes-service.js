angular.module("app").factory("filmesAPI",function($http){
	var _getFilmes = function() {
		return $http.get("http://localhost:8080/mock/dados.json");
	}
	return {
		getFilmes: _getFilmes
	}
});