'use strict';

eventsApp.filter('time', function(){

	return function (duration){
		
		switch(duration){
			case 1:
				return "1 min";
			case 2:
				return "2 min";
			case 3:
				return "3 min";
			case 4:
				return "4 min";
			case 5:
				return "5 min";
			case 6:
				return "6 min";
			case 7:
				return "7 min";
			case 8:
				return "8 min";
			case 9:
				return "9 min";
			case 10:
				return "10 min";
		} 
		
	}

})