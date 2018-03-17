angular.module('columnsHotPage',[])
.controller('columnsHotCtrl',function($scope,$http){
	$http.get('http://localhost:5200/src/data1/columns.hot.json')
		.success(function(res){
			$scope.hot = res.books
		
		})
})

			
	