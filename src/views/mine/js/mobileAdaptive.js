window.onload = function(){

	mobileAdaptive();
	function mobileAdaptive(){

		document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75+ 'px'
		var deviceWidth = document.documentElement.clientWidth;
		console.log(deviceWidth);
		if(deviceWidth >640) deviceWidth = 640;
		document.documentElement.style.fontSize = deviceWidth /3.75+ 'px';
		console.log(document.documentElement.style.fontSize);
	}

}
