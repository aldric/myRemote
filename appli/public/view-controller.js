(function(angular) {
  'use strict';

angular.module('myRemoteApp')
  .controller('ViewController', ['$scope', '$location', function($scope, $location) {
		$scope.toListView = function() {
			$location.path("/remote/list");
		};
		
		$scope.toGridView = function() {
			$location.path("/remote/grid");
		};
		
	}])
	
})(window.angular);