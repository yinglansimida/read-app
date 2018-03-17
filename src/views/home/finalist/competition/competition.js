angular.module('competitionPage',[])
.config(function($stateProvider){
	$stateProvider
	.state('competition',{
	    url:'/competition',
	    templateUrl:'competition/competition.html',
	
	})
})

.controller('competitionPage',function($scope,$http){
	$http.get('http://localhost:5200/src/data/competition.json')
	.success(function(res){
		$scope.pro = res.books
	});
})