'use strict';

eventsApp.controller('EventController', 
	function EventController($scope){

		$scope.eventdata = {
				"id": 305,
				"name": "NG event",
				"location": "Sydney",
				"author": "Arun",

				persons: [
					{
					  "id": 1,
					  "first_name": "Justin",
					  "last_name": "Montgomery",
					  "email": "jmontgomery0@people.com.cn",
					  "gender": "Male",
					  "ip_address": "108.123.229.253"
					}, {
					  "id": 2,
					  "first_name": "Melissa",
					  "last_name": "Lawson",
					  "email": "mlawson1@rediff.com",
					  "gender": "Female",
					  "ip_address": "228.111.134.185"
					}, {
					  "id": 3,
					  "first_name": "Sean",
					  "last_name": "Mcdonald",
					  "email": "smcdonald2@hao123.com",
					  "gender": "Male",
					  "ip_address": "105.182.153.237"
					}, {
					  "id": 4,
					  "first_name": "Alice",
					  "last_name": "Fox",
					  "email": "afox3@myspace.com",
					  "gender": "Female",
					  "ip_address": "97.107.178.222"
					}, {
					  "id": 5,
					  "first_name": "Nancy",
					  "last_name": "Johnson",
					  "email": "njohnson4@bloglines.com",
					  "gender": "Female",
					  "ip_address": "58.246.214.23"
					}, {
					  "id": 6,
					  "first_name": "James",
					  "last_name": "Vasquez",
					  "email": "jvasquez5@free.fr",
					  "gender": "Male",
					  "ip_address": "52.84.51.145"
					}, {
					  "id": 7,
					  "first_name": "Roger",
					  "last_name": "Reynolds",
					  "email": "rreynolds6@senate.gov",
					  "gender": "Male",
					  "ip_address": "189.32.144.18"
					}, {
					  "id": 8,
					  "first_name": "Tina",
					  "last_name": "Andrews",
					  "email": "tandrews7@bandcamp.com",
					  "gender": "Female",
					  "ip_address": "157.144.173.29"
					}, {
					  "id": 9,
					  "first_name": "Nicole",
					  "last_name": "Carr",
					  "email": "ncarr8@bandcamp.com",
					  "gender": "Female",
					  "ip_address": "192.116.100.151"
					}, {
					  "id": 10,
					  "first_name": "Jessica",
					  "last_name": "Young",
					  "email": "jyoung9@usda.gov",
					  "gender": "Female",
					  "ip_address": "113.15.31.14"
					}
				]
				
		};

		$scope.propertyName = 'id';
		$scope.reverse = true;
		
		$scope.sortBy = function(propertyName) {
	      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
	      $scope.propertyName = propertyName;
    	};


});
