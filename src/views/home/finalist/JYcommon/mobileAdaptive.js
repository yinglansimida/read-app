window.onload = function(){
	mobileAdaptive();
	function mobileAdaptive(){
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'
		var deviceWidth = document.documentElement.clientWidth;
		if(deviceWidth > 375) deviceWidth = 375;
		document.documentElement.style.fontSize = deviceWidth / 3.75 + 'px';
	}
			
}	