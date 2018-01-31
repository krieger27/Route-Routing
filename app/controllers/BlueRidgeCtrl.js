"use strict";

angular.module("route").controller("BlueRidgeCtrl",function($scope,Factory){
    Factory.getBlueridge()
    .then((routeObjects)=>{
        console.log(routeObjects.data,"route");
        $scope.listRoutes = routeObjects.data.routes;
        console.log("list routes",$scope.listRoutes);
    }); 
});