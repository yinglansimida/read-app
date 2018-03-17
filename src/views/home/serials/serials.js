angular.module('serialsPage',[])
.config(function($stateProvider){
	$stateProvider
	.state('serialshot',{
		url:'/serialsshot',
		templateUrl:'src/views/home/serials.hot/serials.hot.html'
	})
	.state('serialsupdate',{
		url:'/serialsupdate',
		templateUrl:'src/views/home/serials.update/serials.update.html'
	})
})
.controller('serialsCtrl',function($scope,$http){
	
	
	//轮播图
		var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal',//水平轮播
		loop: true,
		autoplay: 1000,
		// 如果需要分页器
		pagination: '.swiper-pagination',
		}) 
	
	$http.get('http://localhost:5200/src/data/serials.json')
		.success(function(res){
			//专栏分类
			$scope.categories = res.categories
		})
	$http.get('http://localhost:5200/src/data1/serial.hot.json')
		.success(function(res){
			$scope.hot = res.books
		
		})
	$http.get('http://localhost:5200/src/data1/serial.update.json')
		.success(function(res){
			$scope.update = res.books
		
		})
})
