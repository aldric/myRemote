(function(angular) {
  'use strict';

angular.module('myRemoteApp')
  .controller('ZapController', ['$scope', 'socket', function($scope, socket) {
		$scope.zapUp = function() {
			console.log('zapPrevious');
			socket.emit('zap', { action : 'up' });
		};
		
		$scope.zapDown = function() {
			console.log('zapNext');
			socket.emit('zap', { action : 'down' });
		};
			
		$scope.zapPrevious = function() {
			console.log('zapPrevious');
			socket.emit('zap', { action : 'previous' });
		};
		
		$scope.zapNext = function() {
			console.log('zapNext');
			socket.emit('zap', { action : 'next' });
		};
	}])
	
})(window.angular);