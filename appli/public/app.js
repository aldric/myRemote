(function(angular) {
  'use strict';
angular.module('myRemoteApp', [])

	.factory('socket', function() {
		var socket = io();
		return socket;
	})
	.controller('ChannelController', ['$scope', '$location', 'socket', function($scope, $location, socket) {
		
		$scope.channels = [];
		$scope.showGridView = true;
		$scope.showListView = false;
		
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
		
		$scope.toListView = function() {
			$scope.showGridView = false;
			$scope.showListView = true;
		};
		
		$scope.toGridView = function() {
			$scope.showGridView = true;
			$scope.showListView = false;
		};
		
		socket.emit('retrieve-channels', {});
		
	}]);
})(window.angular);