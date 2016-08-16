'use strict';

eventsApp.controller('EventController', 
	function EventController($scope, eventData){

		eventData.getEvent(function(event){
			$scope.eventdata = event.event;
			console.log(event.event);
		});

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
 
		//$scope.getPhotos = photos.getPhotos;
});
