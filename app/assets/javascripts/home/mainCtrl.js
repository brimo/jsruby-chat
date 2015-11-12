angular.module('jsrubyChat')

.controller('MainCtrl', ['$scope', 'messages', function($scope, messages) {
	$scope.messages = messages.messages;
	$scope.postMessage = function() {
		// validate message and name
		if (!$scope.name || $scope.name === '') {
			alert("Name is required!")
			return;
		}
		if (!$scope.message || $scope.message === '' || !$scope.name || $scope.name === '') {
			return;
		}
		messages.create({
			name: $scope.name,
			text: $scope.message
		});
		// reset message field
		$scope.message = '';
	}

	$scope.refresher = function(){
		messages.getAll();
	}
	setInterval(function() { $scope.refresher() }, 500);
	
}])