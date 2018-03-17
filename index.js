angular.module('TemplateProject',['ui.router','me-lazyload','homePage','searchPage','columnsPage','columnsHotPage','columnsUpdatePage','serialsPage','serialsHotPage','serialsUpdatePage','homeNewPage','homeHotPage','homeGalleryPage','homeFreePage','moviesPage','planPage','minePage','xqPage','loginInPage'])
.config(function($urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
})

.controller('indexCtrl',function($scope){
	$scope.change = function(){
		$scope.flag = true;
		$scope.change=function(){
			$scope.flag = !$scope.flag;
		}
	}
	$scope.change1 = function(e){
		$scope.flag1 = true;
		$scope.change1=function(){
			$scope.flag1 = !$scope.flag1;
		}
	}
	$(document).on('click',function(e){
		if(e.target != $('.douban-down article').get(0)){
			$('.menu').css('display','none')
			
		}
		if(e.target != $('.douban-search article').get(0)){
			$('.mine-menu').css('display','none')
		}else{
			$('.mine-menu').css('display','block')
			$('.mine-menu').css({
				display:'block',
				zIndex:'10'
			})

		}
	})
	
	
	// console.log(lazyload)
	// console.log($)
})
