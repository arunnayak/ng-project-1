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
					  "first_name": "Robert",
					  "last_name": "Kennedy",
					  "email": "rkennedy0@loc.gov",
					  "gender": "Male",
					  "address": "2 Del Mar Crossing"
					}, {
					  "id": 2,
					  "first_name": "Donna",
					  "last_name": "Alexander",
					  "email": "dalexander1@economist.com",
					  "gender": "Female",
					  "address": "0193 Golf Circle"
					}, {
					  "id": 3,
					  "first_name": "Denise",
					  "last_name": "Palmer",
					  "email": "dpalmer2@who.int",
					  "gender": "Female",
					  "address": "092 Towne Pass"
					}, {
					  "id": 4,
					  "first_name": "Patricia",
					  "last_name": "Peters",
					  "email": "ppeters3@dagondesign.com",
					  "gender": "Female",
					  "address": "7418 Shopko Center"
					}, {
					  "id": 5,
					  "first_name": "John",
					  "last_name": "Mendoza",
					  "email": "jmendoza4@intel.com",
					  "gender": "Male",
					  "address": "472 Prairie Rose Plaza"
					}, {
					  "id": 6,
					  "first_name": "Helen",
					  "last_name": "Banks",
					  "email": "hbanks5@jugem.jp",
					  "gender": "Female",
					  "address": "1896 Karstens Drive"
					}, {
					  "id": 7,
					  "first_name": "Cheryl",
					  "last_name": "Allen",
					  "email": "callen6@nature.com",
					  "gender": "Female",
					  "address": "8226 Jenifer Hill"
					}, {
					  "id": 8,
					  "first_name": "Jose",
					  "last_name": "Gray",
					  "email": "jgray7@abc.net.au",
					  "gender": "Male",
					  "address": "43 Burning Wood Plaza"
					}, {
					  "id": 9,
					  "first_name": "Peter",
					  "last_name": "Harper",
					  "email": "pharper8@cam.ac.uk",
					  "gender": "Male",
					  "address": "85 Arapahoe Pass"
					}, {
					  "id": 10,
					  "first_name": "Phillip",
					  "last_name": "Porter",
					  "email": "pporter9@nydailynews.com",
					  "gender": "Male",
					  "address": "36897 Bunker Hill Street"
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
