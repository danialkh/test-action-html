$("document").ready(function(){
	$("#search_show").hide();
	$(".bM2").hide();
	$("#halate_linki").hide();
	$("#halate_moraba").show();

safeM=1;
safeL=1;

$("#next_L").click(function(){
//gereftan tedad safe haye link

	hameSL=$("#move_link").outerWidth();
	hameSL=hameSL/870;
	RhameSL=Math.round(hameSL);
	if(hameSL==RhameSL){RhameSL=hameSL;}
	else{
		if(hameSL<RhameSL){hameSM=RhameSL}
		else{RhameSL=RhameSL+1}
	}
//safa ro darim,code barate harkat link

	if(safeL<RhameSL){
		var MarginML = jQuery('#move_link').css('margin-right').replace("px", "");
		if(MarginML % 870==0){
			   MarginML-=870;
			   $("#move_link").css({"margin-right":MarginML});
			   safeL+=1;
			}
		}
});
$("#back_L").click(function(){
//move link
	if(safeL>1){
		var MarginML = jQuery('#move_link').css('margin-right').replace("px", "");
		if(MarginML % 870==0){
		   var MarginML = jQuery('#move_link').css('margin-right').replace("px", "");
		   MarginML=+MarginML + +870;
		   $("#move_link").css({"margin-right":MarginML});
		   safeL-=1;
		}	
	}
});
$("#next_M").click(function(){
//gereftan tedad safe haye moraba

	hameSM=$("#move_moraba").outerWidth();
	hameSM=hameSM/870;
	RhameSM=Math.round(hameSM);
	if(hameSM==RhameSM){RhameSM=hameSM;}
	else{
		if(hameSM<RhameSM){hameSM=RhameSM}
		else{RhameSM=RhameSM+1}
	}
//safa ro darim,code barate harkat moraba

	if(safeM<RhameSM){
		var MarginMM = jQuery('#move_moraba').css('margin-right').replace("px", "");
		if(MarginMM % 870==0){
			   MarginMM-=870;
			   $("#move_moraba").css({"margin-right":MarginMM});
			   safeM+=1;
			}
		}
});
$("#back_M").click(function(){
//move moraba
	if(safeM>1){
		var MarginMM = jQuery('#move_moraba').css('margin-right').replace("px", "");
		if(MarginMM % 870==0){
		   var MarginMM = jQuery('#move_moraba').css('margin-right').replace("px", "");
		   MarginMM=+MarginMM + +870;
		   $("#move_moraba").css({"margin-right":MarginMM});
		   safeM-=1;
		}	
	}
});




//change chideman

	v=$("#chideman").val();
	if(v=="kh"){
		$("#chideman_kh").css({"background-position":"right 0px","cursor":"pointer"});
		$("#chideman_m").css({"background-position":"right 0px","cursor":"default"});
		$("#chideman").val("m");
		
		$("#halate_linki").hide();
		$("#halate_moraba").show();
	
		$(".bM1").show();
		$(".bM2").hide();
	}


$("#chideman_m").click(function(){
	v=$("#chideman").val();
	if(v=="kh"){
		$("#chideman_kh").css({"background-position":"right 0px","cursor":"pointer"});
		$("#chideman_m").css({"background-position":"right 0px","cursor":"default"});
		$("#chideman").val("m");
		
		$("#halate_linki").hide();
		$("#halate_moraba").show();
	
		$(".bM1").show();
		$(".bM2").hide();
	}
});

$("#chideman_kh").click(function(){
	v=$("#chideman").val();
	if(v=="m"){
		$("#chideman_kh").css({"background-position":"right -24px","cursor":"default"});
		$("#chideman_m").css({"background-position":"right -24px","cursor":"pointer"});
		$("#chideman").val("kh");
		
		$("#halate_moraba").hide();
		$("#halate_linki").show();

		$(".bM1").hide();
		$(".bM2").show();
	}
});


$("#search_button").click(function(){

$("#matn_bottom").hide();
$("#search_show").fadeIn(1200);

});
});