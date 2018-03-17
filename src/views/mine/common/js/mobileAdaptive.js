window.onload = function(){
	mobileAdaptive();
	function mobileAdaptive(){
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px'
		var deviceWidth = document.documentElement.clientWidth;
		if(deviceWidth > 640) deviceWidth = 640;
		document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
	}
			
}	