
var handle = angular.module('myapp',[]);

handle.controller("products", ["$scope","$http",function($scope, $http){     
    
    
    
    $scope.search_id='';

    $scope.getProductbyID=function(){
        $http({
            url : 'http://localhost/AngularJS/php/getallproducts.php',
            method : 'POST',
            data : {
                'prodid' : $scope.search_id
            }            
        })
        .then(function(response){
            $scope.products = response.data; //data is builtin variable that contains all the data received from api
        },function(){
            alert("Error in AJAX Call");
        }); 
    };
        
}]);
