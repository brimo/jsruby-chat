angular.module('jsrubyChat', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		});

	$urlRouterProvider.otherwise('home');
}])

.factory('messages', [function() {
	var o = {
		messages: []
	};
	o.create = function(msg) {
		return o.messages.push(msg);
	};
	return o;
}])

.controller('MainCtrl', ['$scope', 'messages', function($scope, messages) {
	$scope.messages = messages;
	$scope.postMessage = function() {
		// validate message and name
		if (!$scope.message || $scope.message === '' || !$scope.name || $scope.name === '') {
			return;
		}
		$scope.messages.create({
			name: $scope.name,
			text: $scope.message
		});
		// reset message field
		$scope.message = '';
	}
}]);