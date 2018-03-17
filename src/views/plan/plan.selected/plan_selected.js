angular.module("planSelected",[])
.controller("planSelected",function($scope){

	console.log()
	$scope.plan_play_video = function(){
		$("#video")[0].play();
	}
})