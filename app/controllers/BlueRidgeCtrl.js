'use strict';

angular.module("route").controller("BlueRidgeCtrl", function ($scope, Factory) {
    Factory.getRoutes()
        .then((routeData) => {
            $scope.routeName = routeData.data.name
            $scope.routeDescription = routeData.data.description;
        });
});