angular.module('xqTotal', [])
.controller('xqTotalCtrl',function($scope,$http) {
	$http.get('src/data/books.json')
	.success(function(res) {
		$scope.pro = res[0].works

		// 点击加载更多，请求数据
		$scope.toggle = function () {
			$scope.pro1 = res[1].works
		}
		
	})
})