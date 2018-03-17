angular.module('finalistPage',
[
	"ui.router",
	"finaindexPage",
	'competitionPage',
	'comedyPage',
	'sciencePage',
	'xqPage'
])
.config(function($urlRouterProvider){

    $urlRouterProvider.otherwise('/finaindex')
	
})

.controller('finalistCtrl',function($scope){
	$scope.trunColor = function(e) {
		var a = e.target;
		$('.finalist-mune a').removeAttr('id');
		$(a).attr('id','fina-active');
	}
	/*====================隐藏头部======================*/
	$scope.headHidden = function(){
		$(".finalist-banner,.finalist-mune").css("display","none");
	}	
})


