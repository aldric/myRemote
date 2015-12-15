(function(angular) {
  'use strict';
angular.module('myRemoteApp')
	.config(function($routeProvider, $locationProvider) {
	  $routeProvider
	   .when('/remote/list', {
		templateUrl: 'remote-list.html',
		controller: 'ChannelController',
		resolve: {
		  showGridView: function() {
			return false;
		  }
		}
	  })
	  .when('/remote/grid', {
		templateUrl: 'remote-grid.html',
		controller: 'ChannelController',
		resolve: {
		  showGridView: function() {
			return true;
		  }
		}
	  })
	  .otherwise({
       templateUrl: 'remote-list.html',
		controller: 'ChannelController',
		resolve: {
		  showGridView: function() {
			return false;
		  }
		}
	  })
	})
})(window.angular);