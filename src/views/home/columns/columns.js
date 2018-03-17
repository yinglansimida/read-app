angular.module('columnsPage',[])
.config(function($stateProvider){
	$stateProvider
	.state('columnshot',{
		url:'/columnshot',
		templateUrl:'src/views/home/columns.hot/columns.hot.html'
	})
	.state('columnsupdate',{
		url:'/columnsupdate',
		templateUrl:'src/views/home/columns.update/columns.update.html'
	})
})
.controller('columnsCtrl',function($scope,$http){
	
	//轮播图
	var mySwiper = new Swiper ('.swiper-container', {
	direction: 'horizontal',//水平轮播
	loop: true,
	autoplay: 1000,
	// 如果需要分页器
	pagination: '.swiper-pagination',
	}) 
	
	
	$http.get('http://localhost:5200/src/data/columns.json')
		.success(function(res){
			$scope.categories = res.categories
			
		})
	$http.get('http://localhost:5200/src/data1/columns.hot.json')
		.success(function(res){
			$scope.hot = res.books
		
		})
	$http.get('http://localhost:5200/src/data1/columns.update.json')
		.success(function(res){
			$scope.update = res.books
		
		})
})
