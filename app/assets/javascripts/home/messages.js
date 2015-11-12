angular.module('jsrubyChat')

.factory('messages', ['$http', function($http) {
	var o = {
		messages: []
	};
	o.getAll = function() {
		return $http.get('/messages.json').success(function(data) {
			angular.copy(data, o.messages);
		});
	};
	o.create = function(message) {
		return $http.post('/messages.json', message).success(function(data) {
			o.messages.push(data);
		});
	};
	return o;
}])