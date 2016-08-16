'use strict'

eventsApp.factory('eventData', function($http, $log){

	return{
		getEvent: function(successcb){
			$http({method: 'GET', url: 'http://demo7914804.mockable.io/eventData'}).
				success(function (data, status, header, config){
				successcb(data);
					$log.warn(data, status, config);

			}).
				error(function (data, status, header, config){
					$log.warn(data, status, config);

			});

		}
	}

})