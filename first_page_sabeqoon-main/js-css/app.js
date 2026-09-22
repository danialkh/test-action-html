$("document").ready(function(){

	$("#back_app").hide();
	$("#come_app").hide();

	$("#click_app").click(function(){

		$("#come_app").show();
		$("#come_app").animate({"left":"0px"},850);
		$("#click_app").animate({"left":"175px"},850);
		$("#click_app").css({"background":" #008000"});
		$("#back_app").fadeIn(600);
	});

	$("#back_app").click(function(){

		$("#come_app").animate({"left":"-175px"},850);
		$("#click_app").animate({"left":"0px"},850);
		$("#click_app").css({"background":" #008000"});
		$("#back_app").fadeOut(600);
		$("#come_app").fadeOut(0);
	});


});