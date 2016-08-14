'use strict';

eventsApp.controller('EventController', 
	function EventController($scope, eventsData){

		$scope.eventdata = eventsData.event;

		//ng directives

		$scope.snippet = '<span style="color: red;">ngBindTemplate example</span>';

		$scope.val = false;
		//ng directives				

		$scope.propertyName = 'id';
		//$scope.propertyName = '-id';
		//$scope.reverse = false;
		$scope.sortBy = function(propertyName) {
	      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
	      $scope.propertyName = propertyName;
    	};
});
