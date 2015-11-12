angular.module('jsrubyChat', [])

.controller('MainCtrl', ['$scope', function($scope) {
	$scope.messages = [{name: 'Tamer', text:'Test'}];

	$scope.postMessage = function(){
		// validate message and name
		if (!$scope.message || $scope.message === '' || !$scope.name || $scope.name === '') {
			return;
		}
		$scope.messages.push({name: $scope.name, text: $scope.message})
		// reset message field
		$scope.message = '';
	}
}]);