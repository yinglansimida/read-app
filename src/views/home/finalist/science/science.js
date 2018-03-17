angular.module('sciencePage',[])
.config(function($stateProvider){
	$stateProvider
	.state('science',{
	    url:'/science',
	    templateUrl:'science/science.html',
	
	})
})

.controller('sciencePage',function($scope,$http){
	$http.get('http://localhost:5200/src/data/science.json')
	.success(function(res){
		$scope.pro = res.books
	});
})