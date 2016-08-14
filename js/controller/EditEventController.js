'use strict';

eventsApp.controller('EditEventController', 
	function EditEventController ($scope){

		$scope.save = function (event, eventForm){
			if(eventForm.$valid){
				window.alert('saved');
			}
		}

		$scope.cancel = function (){

			window.location = "/";
		}
	}
)
