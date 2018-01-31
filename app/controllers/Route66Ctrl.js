"use strict";

angular.module("route").controller("Route66Ctrl",function($scope,Factory){
    Factory.getRoute66()
    .then((routeObjects)=>{
        console.log(routeObjects.data,"route");
        $scope.listRoutes = routeObjects.data.routes;
        console.log("list routes",$scope.listRoutes);
    }); 
});