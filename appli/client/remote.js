'use strict';
angular.module('myRemote')
 
.controller('RemotePage', function(PubSub, Order){
        Order.find({}, function(orderList,  httpHeader){
            //Success callback
            //Subscribe to orders methods here..
            PubSub.subscribe({
                collectionName: 'Channels',
                method : 'POST'
            }, onOrderCreate);
                 
            for(var i=0; i<orderList.length; i++){
                PubSub.subscribe({
                    collectionName: 'Order',
                    method : 'PUT'
                    modelId : orderList[i].id
                }, onOrderUpdate);  
 
                PubSub.subscribe({
                    collectionName: 'Order',
                    method : 'DELETE'
                    modelId : orderList[i].id
                }, onOrderDelete);    
            } 
 
        }, //Error
            function(httpResp){
            console.log(httpResp);
        });
 
        var onOrderCreate = function(){
            //Logic for callback function on new orders
        }
 
        var onOrderUpdate = function(){
            //Logic for callback function on updated orders
        }
 
        var onOrderUpdate = function(){
            //Logic for callback function on delete orders
        }
});