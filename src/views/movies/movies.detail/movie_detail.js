angular.module('movieDetail', [])
.controller("movieDetail",["$scope","$stateParams",function($scope,$stateParams,proarr){
        let id = $stateParams.id;
        let objData = $stateParams.objData;

        $scope.catoge = id;
        if (objData) {
          var Detail = JSON.parse(localStorage.getItem("Detail"));
          if (Detail == null) {
            Detail=[];
          };
          Detail.push(objData);
          localStorage.setItem("Detail",JSON.stringify(Detail));
          $scope.itemsData = objData;
        }else{
          var Detail = JSON.parse(localStorage.getItem("Detail"));
          $scope.itemsData = Detail[Detail.length-1];
        };

        // console.log( $scope.catoge);
         if ( $scope.catoge == "waitechange") {
           $scope.flag = true;
         }else{
           $scope.flag = false;
         }

}])