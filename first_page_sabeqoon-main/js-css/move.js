$(document).ready(function(){
w=window.innerWidth;
w=w/2;
b_w=$("#button_place").outerWidth();
b_w=b_w/2;
$("#button_place").css({"left":w-b_w});

$( window ).resize(function() {
	w=window.innerWidth;
	w=w/2;
	b_w=$("#button_place").outerWidth();
	b_w/=2;
	$("#button_place").css({"left":w-b_w});
});

$("#back").hide();
$("#come").show();
$("#come").click(function(){
$("#button_place").css({"top":"80px","transition":"all 0.8s ease"});
$("#top").css({"top":"-8px"});
$("#come").hide();
$("#back").show();
});
$("#back").click(function(){
$("#button_place").css({"top":"-2px"});
$("#top").css({"top":"-88px","transition":"all 0.8s ease"});
$("#back").hide();
$("#come").show();
});
});