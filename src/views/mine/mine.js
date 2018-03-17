
angular.module('minePage', [])
.config(function($stateProvider) {
	$stateProvider
	.state('mine', {
		url:'/mine',
		templateUrl:'src/views/mine/mine.html'
	})
	.state('login-in', {
		url:'/login-in',
		templateUrl:'src/views/mine/login-in.html'
	})
	.state('login-register', {
		url:'/login-register',
		templateUrl:'src/views/mine/login-register.html'
	})

	
})