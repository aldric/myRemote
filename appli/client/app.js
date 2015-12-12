
'use strict';
var app = angular.module('myRemote', ['lbServices', 'ui-router' ]);
 
.config(function ($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
    .state('remote', {
        url: '/',
        templateUrl: 'remote.html',
        controller: 'RemotePage',
        //Here unsubscribe function must be called to unsubcribe all events on state change
        onExit: unSubscribeAll
    });
});
 
//Function for unsubscribing..
var unSubscribeAll = function(PubSub){
    //Unsubscribe all listeners..
    PubSub.unSubscribeAll();
}