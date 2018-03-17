angular.module('homePage',[])
.config(function($stateProvider){
	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl:'src/views/home/home.html'
	})
	.state('columns',{
		url:'/columns',
		templateUrl:'src/views/home/columns/columns.html'
	})
	.state('serials',{
		url:'/serials',
		templateUrl:'src/views/home/serials/serials.html'
	})
	.state('homenew',{
		url:'/homenew',
		templateUrl:'src/views/home/home.new/home.new.html'
	})
	.state('homehot',{
		url:'/homehot',
		templateUrl:'src/views/home/home.hot/home.hot.html'
	})
	.state('homefree',{
		url:'/homefree',
		templateUrl:'src/views/home/home.free/home.free.html'
	})
	.state('homegallery',{
		url:'/homegallery',
		templateUrl:'src/views/home/home.gallery/home.gallery.html'
	})
	
})
.controller('homeCtrl',function($scope,$http){
	$http.get('http://localhost:5200/src/data1/home.new.json')
		.success(function(res){
			$scope.new = res.books
			// console.log(res.books)
		})
	$http.get('http://localhost:5200/src/data1/home.hot.json')
		.success(function(res){
			$scope.hot = res.books
		
		})
	$http.get('http://localhost:5200/src/data1/home.pic.json')
		.success(function(res){
			$scope.gallery = res.books
		})
	$http.get('http://localhost:5200/src/data1/home.free.json')
		.success(function(res){
			$scope.free = res.books
		
		})

		console.log($('.lazyload'))



})