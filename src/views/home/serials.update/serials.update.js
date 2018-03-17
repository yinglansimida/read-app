angular.module('serialsUpdatePage',[])
.controller('serialsUpdateCtrl',function($scope,$http){
	$http.get('http://localhost:5200/src/data1/serial.update.json')
		.success(function(res){
				$scope.update = res.books;
		})
})

			
	