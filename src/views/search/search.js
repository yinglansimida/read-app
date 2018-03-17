angular.module('searchPage',[])
.config(function($stateProvider){
	$stateProvider
	.state('search',{
		url:'/search',
		templateUrl:'src/views/search/search.html'
	})
})

