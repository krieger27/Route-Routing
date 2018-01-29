'use strict';

angular.module("route", ["ngRoute"])
.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "partials/guides.html",
            controller: "BlueRidgeCtrl"
        })
        .when("/", {
            templateUrl: "partials/guides.html",
            controller: "Route66Ctrl"
        })
        .otherwise("/");
});
controller("BlueRidgeCtrl", function($scope, $rootScope) {
    $scope.message = "Welcome to Angular!";
})
.controller("Route66Ctrl", function($scope) {
    $scope.message = "My name is Angular Man!";
});