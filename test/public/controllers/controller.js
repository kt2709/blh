var myapp = angular.module('myApp',['ui.bootstrap']);

myapp.controller('AppCtrl',['$scope','$http','$location',function($scope,$http,$location){
	var absUrl = $location.search();
	console.log(absUrl.user);
}]);