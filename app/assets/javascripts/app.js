angular.module('jsrubyChat', ['ui.router', 'templates'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'home/_home.html',
			controller: 'MainCtrl',
			resolve: {
				postPromise: ['messages', function(messages) {
					return messages.getAll();
				}]
			}
		});

	$urlRouterProvider.otherwise('home');
}]);