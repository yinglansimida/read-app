angular.module('moviesPage',["movieDetail","oddSell"])
   .config(function($stateProvider,$urlRouterProvider){
      // $urlRouterProvider.otherwise('/movies/movieIndex');
      $stateProvider
      .state('movies',{
         url:'/movies',
         templateUrl:'src/views/movies/movies.html',
      })
      .state('movies.adaptation',{
         url:'/adaptation',
         templateUrl:'src/views/movies/movies.adaptation/adaptation.html'
      })
      .state('movies.detail',{
        url:'/detail',
        params:{
          id:null,
          objData:null
        },
        templateUrl:'src/views/movies/movies.detail/movie_detail.html',
      })
     .state('movies.oddsell',{
        url:'/oddsell',
        templateUrl:'src/views/movies/movies.oddsell/odd_sell.html',
      })
})
.controller('moviesPage',['$scope','$http',function($scope,$http){

  $http.get('http://localhost:5200/src/data1/film.json')
  .success(function(res){
    $scope.flag = true;
    $scope.letterLimit = 5;
    $scope.moviesArr = res.books;
    $scope.len = $scope.moviesArr.length;
    $scope.catoge = "waitechange";
    $scope.getMore = function(){
        $scope.letterLimit = $scope.letterLimit + 5;
        if ($scope.letterLimit >= $scope.len) {
           $scope.flag = false;
        };
    }
  })
}])
.directive("createStar",function(){
      return {
        restrict:"E",
        replace:true,
        scope:{
          name:"=" , // =代表$scope传入的东西
          show:"&",  //&代表方法
        },
        link:function($scope,$element,$attrs){
           var ele = $element[0];
           var num = Number($attrs.value/2).toFixed(2);
           var floInt =  Math.floor(num);//向下取整
           var upDown = Math.round(num); //四舍五入
           var cnt = 0;
           for(var i = 0; i < floInt; i++){
            cnt++;
            $(ele).append($('<img src="src/views/movies/images/star1.png">')) 
           }
           if (upDown>floInt) {
            cnt++;
            $(ele).append($('<img src="src/views/movies/images/star4.png">'))
           };
           for(var j = cnt; j<5;j++){
            cnt++;
            $(ele).append($('<img src="src/views/movies/images/star2.png">'))
           }
        }
      }
})
