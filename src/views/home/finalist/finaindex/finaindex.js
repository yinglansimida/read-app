angular.module('finaindexPage',[])
.config(function($stateProvider){
	$stateProvider
	.state('finaindex',{
	    url:'/finaindex',
	    templateUrl:'finaindex/finaindex.html',
	
	})
})

.controller('finaindexPage',function($scope,$http){
	$http.get('http://localhost:5200/src/data/comp_index1.json')
	.success(function(res){
		$scope.pro = res.books
	});
	$http.get('http://localhost:5200/src/data/comp_index2.json')
	.success(function(res){
		$scope.pro2 = res.books
	});
	$http.get('http://localhost:5200/src/data/comp_index3.json')
	.success(function(res){
		$scope.pro3 = res.books
	});
	
	
	
})
