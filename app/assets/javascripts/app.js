angular.module('jsrubyChat', ['ui.router', 'templates'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'home/_home.html',
			controller: 'MainCtrl'
		});

	$urlRouterProvider.otherwise('home');
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