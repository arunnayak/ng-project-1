'use strict'

eventsApp.factory('eventDataObj', function($http){

	return{
		getEvent: function(successcb){
			$http({method: 'GET', url: 'http://demo7914804.mockable.io/eventData'}).
				success(function (data, status, header, config){
				successcb(data);

			}).
				error(function (data, status, header, config){
					window.alert('loading error, try later!');

			});

		}
	}

})