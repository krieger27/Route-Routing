'use strict';

angular.module("route").factory("Factory",function($q,$http){
    let getBlueridge  = ()=>{
        return $q((resolve,reject)=>{
            $http
                .get("../data/routes.json")
                .then((routes)=>{
                    resolve(routes);
                    console.log(" data",routes);
                })
                .catch((err)=>{
                    reject(err);
                });
        });
    };
    let getRoute66 = ()=> {
        return $q((resolve,reject)=>{
            $http
                .get("../data/route2.json")
                .then((route2)=>{
                    resolve(route2);
                    console.log(" data",route2);
                })
                .catch((err)=>{
                    reject(err);
                });
        });
    };  
    return { getBlueridge, getRoute66 };
});