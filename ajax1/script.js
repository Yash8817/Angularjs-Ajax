
var handle = angular.module('myapp',[]);

handle.controller("products", ["$scope", "$http", function(c, $http){            
    
    c.getAllProducts = function(){

        $http({
            
            url : 'http://localhost/AngularJS/php/getallproducts.php',
            method : 'GET',            
        })
        .then(
            function(response){
                c.prod = response.data; //data is builtin variable that contains all the data received from api
            },function(response){
                alert("Error in AJAX Call");
            });

    };

   
}]);


    //Basic syntax to use $http built in AngularJS service
    /*
        $http({

        })
        .then(
            function(response){
                // if success

            },function(response){
                // if failed

            }
        );
    */



