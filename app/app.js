'use strict';

angular.module("route", ["ngRoute"])
.config($routeProvider => {
    $routeProvider
        .when("/blueridge", {
            templateUrl: "partials/blueridge.html",
            controller: "BlueRidgeCtrl"
        })
        .when("/route66", {
            templateUrl: "partials/route66.html",
            controller: "Route66Ctrl"
        })
        .otherwise("/");
});
