angular.module('serialsHotPage',[])
.controller('serialsHotCtrl',function($scope,$http){
	$http.get('http://localhost:5200/src/data1/serial.hot.json')
		.success(function(res){
				$scope.hot = res.books;
		})
})

			
	