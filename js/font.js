$(function(){
	var time = null;
	function clearColor(){
		$(".content").removeClass("opacityHigh").addClass("opacityLow");
	}
	$(".top").click(function(){
		$(".pic").css({"animation-name":"mythird","-moz-animation-name":"mythird","-webkit-animation-name":"mythird","-o-animation-name":"mythird"});
	});
	$(".bottom").click(function(){
		clearTimeout(time);
		$(".content").removeClass("opacityLow").addClass("opacityHigh");
		$(".content").css({"animation-name":"myfourth","-moz-animation-name":"myfourth","-webkit-animation-name":"myfourth","-o-animation-name":"myfourth"});
		time = setTimeout(clearColor,500);
	});
	$(".left").click(function(){
		$(".pic").css({"animation-name":"myfirst","-moz-animation-name":"myfirst","-webkit-animation-name":"myfirst","-o-animation-name":"myfirst"});
	});
	$(".right").click(function(){
		clearTimeout(time);
		$(".content").removeClass("opacityLow").addClass("opacityHigh");
		$(".content").css({"animation-name":"mysecond","-moz-animation-name":"mysecond","-webkit-animation-name":"mysecond","-o-animation-name":"mysecond"});
		time = setTimeout(clearColor,500);
	});
});
