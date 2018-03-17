angular.module('homeHotPage',[])
.controller('homeHotCtrl',function($scope,$http){
	$http.get('http://localhost:5200/src/data1/home.hot.json')
		.success(function(res){
				$scope.books = res.books
		})


		// 点击加载更多，请求数据
		$scope.toggle = function () {
			$http.get('http://localhost:5200/src/data1/home.new.json')
			.success(function(res){
				console.log(res)
				$scope.pro1 = res.books
			})
			
		}


})

			
	