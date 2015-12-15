(function(angular) {
  'use strict';
angular.module('myRemoteApp')
	.factory('socket', function() {
			var socket = io();
			return socket;
		})
	})(window.angular);