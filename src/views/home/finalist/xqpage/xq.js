angular.module('xqPage', [])
.config(function($stateProvider) {
	$stateProvider
	.state('xq', {
		url:'/xq',
		params:{
			id:null,
			objData:null
		},
		templateUrl:'xqpage/xq.html'
	})
	.state('xqContent', {
		url:'/xqContent',
		templateUrl:'xqpage/xqContent/xqContent.html'
	})
})
.controller('xqCtrl',function($scope,$http,$stateParams) {

		
		let id = $stateParams.id
		$scope.newId = $stateParams.id
		let objData = $stateParams.objData

		// 缓存数据
		if(objData) {
			var getData = JSON.parse(localStorage.getItem('localStorageData'))
			if(localStorageData == null) {
				var localStorageData = [];
				localStorageData.push(objData);
				var saveData = localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
				var getData = JSON.parse(localStorage.getItem('localStorageData'))
			} else {
				var saveData = localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
				var getData = JSON.parse(localStorage.getItem('localStorageData'))
			}

		} else {
			var getData = JSON.parse(localStorage.getItem('localStorageData'))
		}

		// console.log(getData)

		$scope.nData = getData[0]
		$scope.tag = getData[0].tags
		$scope.tabC = getData[0].table_of_contents



		// 简介与目录动画
		var timer;
		setTimeout(function () {
			$('.xq_books_in_content, .xq_books_introduction img').on('click', function () {
				$('.xq_books_in_content').toggleClass('active');
			})
		}, 100)
		
		var timer1;
		setTimeout(function () {
			$('.xq_books_list_content, .xq_books_list img').on('click', function () {
				$('.xq_books_list_content').toggleClass('active');
			})
		}, 100)



		// 分享
		$('.xq_read_shar').on('click', function () {
			$('.share').fadeIn('slow');
			$('.share').addClass('bgColor')
		})
		$('.share-cancle,.share-icos section a').on('click', function () {
			$('.share').css({
				display:'none',
			})
		})

		// 登录
		$('.xq_books_load').on('click', function () {
			$('.login').css({
				display:'block'
			})
			$('.login').addClass('bgColor')
		})
		$('.login-a').on('click', function () {
			$('.login').css({
				display:'none',
			})
		})

})


// 小星星
.directive('start', function () {
	return {
		restrict:'EA',
		replace:true,
		scope:{
			startCt:'='
		},
		link:function ($scope, $element, $attrs) {
			 var ele = $element[0];
			 console.log($attrs.star)
			 var num = Number($attrs.star/2).toFixed(2);
			 console.log(num)
			 var floInt = Math.floor(num);
			 var upInt = Math.round(num);
			 var cnt = 0;

			 console.log(upInt,floInt) 

			 for(var i = 0;i < floInt;i++) {
			 	cnt++;
          		$(ele).append($('<img src="images/star1.png">'))
			 }
			 console.log(cnt)
			 if (upInt>floInt) {
           		cnt++;
                $(ele).append($('<img src="images/star4.png">'))
             };
             console.log(cnt)
             for(var j = cnt; j<5;j++){
                cnt++;
                $(ele).append($('<img src="images/star2.png">'))
             }
		}

	}

})


$(document).on('click',function(){
	$('.back').css('display','block')
	$('.back').on('click',function(){

		window.history.back()
	})
});