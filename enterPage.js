var splashSwiper = new Swiper('.splash-box', {
	autoplayDisableOnInteraction: true,
	pagination: '.swiper-pagination'
});

function splashAnimation() {
	$('.splash').animate({
		width: 0,
	}, 1000);
	location.href = "http://localhost:5200/#/home";
}


$('.skip').click(function() {
	splashAnimation();
})
$('.begin').click(function() {
	splashAnimation();
})