angular.module('oddSell', [])
.controller("oddSell",['$scope','$http',function($scope,$http){

   $http.get('http://localhost:5200/src/data1/sale.json')
   .success(function(res){
      $scope.catoge = "oddsell";
      $scope.oddData = res.books;
   });

}])