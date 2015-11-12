angular.module('jsrubyChat')

.factory('messages', [function() {
	var o = {
		messages: []
	};
	o.create = function(msg) {
		return o.messages.push(msg);
	};
	return o;
}])