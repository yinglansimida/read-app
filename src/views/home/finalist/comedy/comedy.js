angular.module('comedyPage',[])
.config(function($stateProvider){
	$stateProvider
	.state('comedy',{
	    url:'/comedy',
	    templateUrl:'comedy/comedy.html',
	
	})
})

.controller('comedyPage',function($scope,$http){
	$http.get('http://localhost:5200/src/data/comedy.json')
	.success(function(res){
//		console.log(res.books)
		$scope.pro = res.books
	});
})