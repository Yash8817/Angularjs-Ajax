var handle = angular.module('myapp', [])

handle.controller('products', [
  '$scope',
  '$http',
  function (c, $http) {
    c.sort_by = 'product_id'

    c.getAllProducts = function () {
      $http({
        url: 'http://localhost/AngularJS/php/getallproducts.php',
        method: 'GET',
      }).then(
        function (response) {
          c.products = response.data //data is builtin variable that contains all the data received from api
        },
        function (response) {
          alert('Error in AJAX Call')
        },
      )
    }

    c.sort = function (column_name, sort_order) {
      if (sort_order == 'ASC') {
        c.sort_by = column_name
      }
      if (sort_order == 'DESC') {
        c.sort_by = '-' + column_name
      }
    }

    c.getProductsbyTitan = function () {
      $http({
        url: 'http://localhost/AngularJS/php/titanproducts.php',
        method: 'GET',
      }).then(
        function (response) {
          c.products = response.data //data is builtin variable that contains all the data received from api
        },
        function (response) {
          alert('Error in AJAX Call')
        },
      )
    }

    c.getProductsGT1000 = function () {

        $http({
            url: 'http://localhost/AngularJS/php/productwithprice.php',
            method: 'GET',
          }).then(
            function (response) {
              c.products = response.data
            },
            function (response) {
              alert('Error in AJAX Call product with price')
            },
          )


    }
  },
])
