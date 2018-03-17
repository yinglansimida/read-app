angular.module('homeGalleryPage',[])
.controller('homeGalleryCtrl',function($scope,$http){
	$http.get('http://localhost:5200/src/data1/home.list.json')
		.success(function(res){
				$scope.books = res.books
				console.log(res)

				// 点击加载更多，请求数据
				$scope.toggle = function () {
					$http.get('http://localhost:5200/src/data1/home.hot.json')
					.success(function(res){
						console.log(res)
						$scope.pro1 = res.books
					})
					
				}


		})
})

			
	