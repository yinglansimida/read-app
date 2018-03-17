angular.module("planNovel",[])
.controller('planNovel',['$scope','$http',function($scope,$http){

   $http.get('http://localhost:5200/src/data1/columns.hot.json')
   .success(function(res){
   		$scope.novelMore  =  res.books;
   });

}])
.directive("createPlanstar",function(){
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
           };
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