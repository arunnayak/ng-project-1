'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute'])
	.config(function($routeProvider){
		
		$routeProvider.when('/',
		{
			templateUrl:'templates/home.html',
			controller: 'EventController'
		});

		$routeProvider.when('/create',
		{
			templateUrl:'templates/create.html',
			controller: 'EditEventController'
		});

		$routeProvider.when('/details/:eventId',
		{
			templateUrl:'templates/details.html',
			controller: 'EventController'
		});
		
		$routeProvider.otherwise({redirectTo: '/'});
		
});	