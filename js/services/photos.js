'use strict'

eventsApp.factory('photos', function($http, $log){

	return{
		getPhotos: function(successcb){
			$http({method: 'GET', url: 'https://jsonplaceholder.typicode.com/photos'}).
				success(function (data, status, header, config){
				successcb(data);

			}).
				error(function (data, status, header, config){

			});

		}
	}

})