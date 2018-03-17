angular.module('columnsUpdatePage',[])
.controller('columnsUpdateCtrl',function($scope,$http){
	$http.get('http://localhost:5200/src/data1/columns.update.json')
		.success(function(res){
			$scope.update = res.books
		
		})
})

			
	