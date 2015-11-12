angular.module('jsrubyChat', [])

.controller('MainCtrl', ['$scope', function($scope) {
	$scope.chatarea = '';
	$scope.postMessage = function(){
		if (!$scope.message || $scope.message === '' || !$scope.name || $scope.name === '') {
			return;
		}
		$scope.chatarea +=  $scope.name + ': ' + $scope.message + '\n';
		$scope.message = '';
	}
}]);