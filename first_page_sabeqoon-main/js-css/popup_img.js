$("document").ready(function(){
infoShower=1;
win_w=window.outerWidth/2;
win_h=window.outerHeight/2;
popup_height=$("#pop_img").outerHeight()/2+53;
popup_width=$("#pop_img").outerWidth()/2+10;
spaceLeft=win_w-popup_width;
spaceTop=win_h-popup_height;
$("#pop_img").css({"left":spaceLeft,"top":spaceTop}); 

popup_w=$("#pop_img").outerWidth()-30;
$("#text_img").css({"width":popup_w}); 


$("#pop_img").hide();
$("#back_pop").hide();


$("#info_place").click(function(){
	if(infoShower==0){
		$("#text_img").fadeIn(300);
		$("#felesh_info").fadeIn(500);
		infoShower=1;
	}
	else{
		$("#text_img").fadeOut(300);
		$("#felesh_info").fadeOut(330);
		infoShower=0;
	}
	
});

$(".img_g").click(function(){

$("#back_pop").fadeIn(600);
$("#pop_img").fadeIn(200);

$("#pop_img").css({"height":"auto"});

H=$("#pop_img").outerHeight();

$("#pop_img").css({"height":"0px"}).animate({"height":H},400);

});

	$("#close_img").click(function(){

		$("#back_pop").fadeOut(600);
		$("#pop_img").animate({"height":"0px"},400)
		$("#pop_img").fadeOut(200);
		
			$("#text_img").fadeIn(300);
			$("#felesh_info").fadeIn(500);
			infoShower=1;
	});


	$(".img_g").mouseover(function(){
		$(this).animate({"opacity":"0"},200);
	});
	$(".img_g").mouseout(function(){
		$(this).animate({"opacity":"1"},200);
	});
	


	$("#gallery_select").change(function(){
		
		value_selected=$("#gallery_select").val();
		if(value_selected=="g0"){
			$(".li_g").fadeIn(1000);
		}
		else{
			$(".li_g").hide();
			$(".o" + value_selected).fadeIn(1000);
		}
	});


	$("#video_select").change(function(){
		value_selected=$("#video_select").val();
		if(value_selected=="v0"){
			$(".li_v").fadeIn(1000);
		}
		else{
			$(".li_v").hide();
			$(".o" + value_selected).fadeIn(1000);
		}
	});

});