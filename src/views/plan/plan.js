angular.module('planPage',["planNovel","planSelected"])
.config(function($stateProvider,$urlRouterProvider){
//	$urlRouterProvider.otherwise('/plan/planIndex');
	$stateProvider
	.state('plan',{
		url:'/plan',
		templateUrl:'src/views/plan/plan.html',
		params:{
	      list:0
	    },
	})
	.state('plan.index',{
		url:'/planIndex',
		templateUrl:'src/views/plan/plan.index/plan_index.html'
	})
	.state('plan.selected',{
		url:'/planSelected',
		templateUrl:'src/views/plan/plan.selected/plan_selected.html'
	})
	.state('plan.intro',{
		url:'/planIntro',
		templateUrl:'src/views/plan/plan.intro/plan_intro.html'
	})
	.state('plan.novel',{
		url:'/planNovel',
		templateUrl:'src/views/plan/plan.novel/plan_novel.html',
		controller:"planNovel"
	})
})
.controller('planindex',['$scope','$http',"$stateParams",function($scope,$http,$stateParams){
   
    $http.get('http://localhost:5200/src/data1/columns.hot.json')
   .success(function(res){
   		var splitData = [];
   		$.each(res.books, function(index, val) {
   			 if (index <6) {
   			 	splitData.push(val);
   			 };
   		});

   		$scope.planIndexData = splitData;
   });

}])
.controller('planList',['$scope',"$stateParams",function($scope,$stateParams){
	 let list = $stateParams.list;
	 $scope.changeList = list;

}])



