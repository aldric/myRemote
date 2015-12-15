(function(angular) {
  'use strict';
angular.module('myRemoteApp')
	.controller('ChannelController', ['$scope', '$location', 'socket', 'showGridView', function($scope, $location, socket, showGridView) {
		
		$scope.channels = [];
		$scope.showGridView = showGridView;
		$scope.showListView = !showGridView;
		
		socket.on('channels-list', function(channels) {
			//console.log('channels-list ' +  channels.length)
			$scope.channels = channels;
			$scope.$apply();
		});
		
		$scope.zap = function(img) {
			console.log(img);
			var payload = { img : img };
			console.log(payload);
			socket.emit('zap', { img : img });
		};
		
		$scope.toListView = function() {
			$scope.showGridView = false;
			$scope.showListView = true;
		};
		
		$scope.toGridView = function() {
			$scope.showGridView = true;
			$scope.showListView = false;
		};
		
		socket.emit('retrieve-channels', {});
	}])

})(window.angular);