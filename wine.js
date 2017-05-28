$("#d2").css({"display":"none"})
$("#d3").css({"display":"none"})
$("#d4").css({"display":"none"})


let click_state = false;
$("#d1").click(function(){
	if(click_state === false){
	$("#d2").css({"display":"block"});	
		click_state = true;		
	}
	else{
		$("#d2").css({"display":"none"});
		click_state = false;
	}
	})
$("#b2").click(function(){
	$("#d2").css({"display":"none"});
	click_state = false;
	
})

	let click_state1 = false;
$("#r1").click(function(){
	if(click_state1 === false){
	$("#d3").css({"display":"block"});	
		click_state1 = true;		
	}
	else{
		$("#d3").css({"display":"none"});
		click_state1 = false;
	}
	})
$("#b3").click(function(){
	$("#d3").css({"display":"none"});
	click_state1 = false;
	
	
})
$("#form").submit(function(e){
	e.preventDefault();
	let reg_data = $(this).serializeArray();
	localStorage.setItem("email",reg_data[2].value);
	localStorage.setItem("password",reg_data[3].value);
})
$("#form_login").submit(function(e){
	e.preventDefault();
	let login_data = $(this).serializeArray();
	if(login_data[0].value == localStorage.email && login_data[1].value == localStorage.password){
		alert("Welcome "+ localStorage.email);
		sessionStorage.setItem("isLoggedIn",true);
	}
	else{
		alert("Something went wrong");
	}
})

$("#white_colings").css({"display":"none"})
$("#shamp_colings").css({"display":"none"})
$("#white").click(function(){
	$("#white_colings").fadeIn(0)
	$("#red_colings").fadeOut(0);	
	$("#shamp_colings").fadeOut(0);
				
	})
	$("#shamp").click(function(){
	$("#white_colings").fadeOut(0)
	$("#red_colings").fadeOut(0);	
	$("#shamp_colings").fadeIn(0);
				
	})
	$("#red").click(function(){
	$("#white_colings").fadeOut(0)
	$("#red_colings").fadeIn(0);	
	$("#shamp_colings").fadeOut(0);
				
	})


$("#slider2").css({"display":"none"})
$("#slider3").css({"display":"none"})
	$("#iconRed").click(function(){
	$("#slider2").fadeOut(0)
	$("#slider1").fadeIn(0);	
	$("#slider3").fadeOut(0);
				
	})
	$("#iconWith").click(function(){
	$("#slider1").fadeOut(0)
	$("#slider2").fadeIn(0);	
	$("#slider3").fadeOut(0);
				
	})	
	$("#iconShamp").click(function(){
	$("#slider1").fadeOut(0)
	$("#slider3").fadeIn(0);	
	$("#slider2").fadeOut(0);
				
	});
	let click=false;
	$("#cartCont").click(function(){
	if(click===false){
		
		$("#shopping").show(500);
		click=true;
	}
	else{
		$("#shopping").hide(500);
		click=false;
	}
});
	

var slides = 0;
sliders();
function sliders() {
    var i;
    var x = document.getElementsByClassName("sliders");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    slides++;
    if (slides > x.length) {slides = 1}    
    x[slides-1].style.display = "block";  
    setTimeout(sliders, 3000); 
};
$(".b2").click(function(){
	 var a=parseInt($("#cartid,#totalproduct").html())  +  1;
	 $("#cartid,#totalproduct").html(a);
});
$(".close_button1").click(function(){
	$(".wine1").fadeOut(0);
	 var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".close_button2").click(function(){
	$(".wine2").fadeOut(0);
 var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".close_button3").click(function(){
	$(".wine3").fadeOut(0);
 var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".close_button4").click(function(){
	$(".wine4").fadeOut(0);
 var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".close_button5").click(function(){
	$(".wine5").fadeOut(0);
 var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".close_button6").click(function(){
	$(".wine6").fadeOut(0);
 var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".close_button7").click(function(){
	$(".wine7").fadeOut(0);
 var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".close_button8").click(function(){
	$(".wine8").fadeOut(0);
 var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".close_button9").click(function(){
	$(".wine9").fadeOut(0);
 var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".close_button10").click(function(){
	$(".wine10").fadeOut(0);
 var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".close_button11").click(function(){
	$(".wine11").fadeOut(0);
 var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".close_button12").click(function(){
	$(".wine12").fadeOut(0);
 var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".add1").click(function(){
	var b=parseInt($("#totalprice").text())+150;
	$("#totalprice").text(b);
	$(".wine1").css({"display":"flex"});
	var a=parseInt($(".n1").html())  + 1;
	 $(".n1").html(a);
});
$(".add2").click(function(){
	var b=parseInt($("#totalprice").text())+130;
	$("#totalprice").text(b);
	$(".wine2").css({"display":"flex"});
	var a=parseInt($(".n2").html())  + 1;
	 $(".n2").html(a);
});
$(".add3").click(function(){
	var b=parseInt($("#totalprice").text())+110;
	$("#totalprice").text(b);
	$(".wine3").css({"display":"flex"});
	var a=parseInt($(".n3").html())  + 1;
	 $(".n3").html(a);
});
$(".add4").click(function(){
	var b=parseInt($("#totalprice").text())+300;
	$("#totalprice").text(b);
	$(".wine4").css({"display":"flex"});
	var a=parseInt($(".n4").html())  + 1;
	 $(".n4").html(a);
});
$(".add5").click(function(){
	var b=parseInt($("#totalprice").text())+136;
	$("#totalprice").text(b);
	$(".wine5").css({"display":"flex"});
	var a=parseInt($(".n5").html())  + 1;
	 $(".n5").html(a);
});
$(".add6").click(function(){
	var b=parseInt($("#totalprice").text())+114;
	$("#totalprice").text(b);
	$(".wine6").css({"display":"flex"});
	var a=parseInt($(".n6").html())  + 1;
	 $(".n6").html(a);
});
$(".add7").click(function(){
	var b=parseInt($("#totalprice").text())+100;
	$("#totalprice").text(b);
	$(".wine7").css({"display":"flex"});
	var a=parseInt($(".n7").html())  + 1;
	 $(".n7").html(a);
});
$(".add8").click(function(){
	var b=parseInt($("#totalprice").text())+80;
	$("#totalprice").text(b);
	$(".wine8").css({"display":"flex"});
	var a=parseInt($(".n8").html())  + 1;
	 $(".n8").html(a);
});
$(".add9").click(function(){
	var b=parseInt($("#totalprice").text())+266;
	$("#totalprice").text(b);
	$(".wine9").css({"display":"flex"});
	var a=parseInt($(".n9").html())  + 1;
	 $(".n9").html(a);
});
$(".add10").click(function(){
	var b=parseInt($("#totalprice").text())+106;
	$("#totalprice").text(b);
	$(".wine10").css({"display":"flex"});
	var a=parseInt($(".n9").html())  + 1;
	 $(".n10").html(a);
});
$(".add11").click(function(){
	var b=parseInt($("#totalprice").text())+700;
	$("#totalprice").text(b);
	$(".wine11").css({"display":"flex"});
	var a=parseInt($(".n9").html())  + 1;
	 $(".n11").html(a);
});
$(".add12").click(function(){
	var b=parseInt($("#totalprice").text())+310;
	$("#totalprice").text(b);
	$(".wine12").css({"display":"flex"});
	var a=parseInt($(".n9").html())  + 1;
	 $(".n12").html(a);
});
$(".plus_button1").click(function(){
	var b=parseInt($("#totalprice").text())+106;
	$("#totalprice").text(b);
	var a=parseInt($(".n1").html())  + 1;
	 $(".n1").html(a);
	var a=parseInt($("#totalproduct").text())  +  1;
	 $("#totalproduct").text(a);
	var a=parseInt($("#cartid").text())  +  1;
	 $("#cartid").text(a);
});
$(".plus_button2").click(function(){
	var b=parseInt($("#totalprice").text())+69;
	$("#totalprice").text(b);
	var a=parseInt($(".n2").html())  + 1;
	 $(".n2").html(a);
	var a=parseInt($("#totalproduct").text())  +  1;
	 $("#totalproduct").text(a);
	var a=parseInt($("#cartid").text())  +  1;
	 $("#cartid").text(a); 
});
$(".plus_button3").click(function(){
	var b=parseInt($("#totalprice").text())+99;
	$("#totalprice").text(b);
	var a=parseInt($(".n3").html())  + 1;
	 $(".n3").html(a);
	 	 var a=parseInt($("#totalproduct").text())  +  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  +  1;
	 $("#cartid").text(a);
});
$(".plus_button4").click(function(){
	var b=parseInt($("#totalprice").text())+63;
	$("#totalprice").text(b);
	var a=parseInt($(".n4").html())  + 1;
	 $(".n4").html(a);
	 	 var a=parseInt($("#totalproduct").text())  +  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  +  1;
	 $("#cartid").text(a);
});
$(".plus_button5").click(function(){
	var b=parseInt($("#totalprice").text())+63;
	$("#totalprice").text(b);
	var a=parseInt($(".n5").html())  + 1;
	 $(".n5").html(a);
	 	 var a=parseInt($("#totalproduct").text())  +  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  +  1;
	 $("#cartid").text(a);
});
$(".plus_button6").click(function(){
	var b=parseInt($("#totalprice").text())+50;
	$("#totalprice").text(b);
	var a=parseInt($(".n6").html())  + 1;
	 $(".n6").html(a);
	 	 var a=parseInt($("#totalproduct").text())  +  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  +  1;
	 $("#cartid").text(a);
});
$(".plus_button7").click(function(){
	var b=parseInt($("#totalprice").text())+65;
	$("#totalprice").text(b);
	var a=parseInt($(".n7").html())  + 1;
	 $(".n7").html(a);
	 	 var a=parseInt($("#totalproduct").text())  +  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  +  1;
	 $("#scartid").text(a);
});
$(".plus_button8").click(function(){
	var b=parseInt($("#totalprice").text())+45;
	$("#totalprice").text(b);
	var a=parseInt($(".n8").html())  + 1;
	 $(".n8").html(a);
	 	 var a=parseInt($("#totalproduct").text())  +  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  +  1;
	 $("#cartid").text(a);
});
$(".plus_button9").click(function(){
	var b=parseInt($("#totalprice").text())+90;
	$("#totalprice").text(b);
	var a=parseInt($(".n9").html())  + 1;
	 $(".n9").html(a);
	 	 var a=parseInt($("#totalproduct").text())  +  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  +  1;
	 $("#cartid").text(a);
});
$(".plus_button10").click(function(){
	var b=parseInt($("#totalprice").text())+90;
	$("#totalprice").text(b);
	var a=parseInt($(".n10").html())  + 1;
	 $(".n10").html(a);
	 	 var a=parseInt($("#totalproduct").text())  +  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  +  1;
	 $("#cartid").text(a);
});
$(".plus_button11").click(function(){
	var b=parseInt($("#totalprice").text())+90;
	$("#totalprice").text(b);
	var a=parseInt($(".n11").html())  + 1;
	 $(".n11").html(a);
	 	 var a=parseInt($("#totalproduct").text())  +  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  +  1;
	 $("#cartid").text(a);
});
$(".plus_button12").click(function(){
	var b=parseInt($("#totalprice").text())+90;
	$("#totalprice").text(b);
	var a=parseInt($(".n12").html())  + 1;
	 $(".n12").html(a);
	 	 var a=parseInt($("#totalproduct").text())  +  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  +  1;
	 $("#cartid").text(a);
});
$(".minus_button1").click(function(){
	var b=parseInt($("#totalprice").text())-89;
	$("#totalprice").text(b);
	var a=parseInt($(".n1").html())  - 1;
	 $(".n1").html(a);
	 	 var a=parseInt($("#totalproduct").text())  -  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".minus_button2").click(function(){
	var b=parseInt($("#totalprice").text())-69;
	$("#totalprice").text(b);
	var a=parseInt($(".n2").html())  - 1;
	 $(".n2").html(a);
	 	 var a=parseInt($("#totalproduct").text())  -  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".minus_button3").click(function(){
	var b=parseInt($("#totalprice").text())-99;
	$("#totalprice").text(b);
	var a=parseInt($(".n3").html())  - 1;
	 $(".n3").html(a);
	 	 var a=parseInt($("#totalproduct").text())  -  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".minus_button4").click(function(){
	var b=parseInt($("#totalprice").text())-63;
	$("#totalprice").text(b);
	var a=parseInt($(".n4").html())  - 1;
	 $(".n4").html(a);
	 	 var a=parseInt($("#totalproduct").text())  -  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".minus_button5").click(function(){
	var b=parseInt($("#totalprice").text())-63;
	$("#totalprice").text(b);
	var a=parseInt($(".n5").html())  - 1;
	 $(".n5").html(a);
	 	 var a=parseInt($("#totalproduct").text())  -  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".minus_button6").click(function(){
	var b=parseInt($("#totalprice").text())-50;
	$("#totalprice").text(b);
	var a=parseInt($(".n6").html())  - 1;
	 $(".n6").html(a);
	 	 var a=parseInt($("#totalproduct").text())  -  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".minus_button7").click(function(){
	var b=parseInt($("#totalprice").text())-65;
	$("#totalprice").text(b);
	var a=parseInt($(".n7").html())  - 1;
	 $(".n7").html(a);
	 	 var a=parseInt($("#totalproduct").text())  -  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".minus_button8").click(function(){
	var b=parseInt($("#totalprice").text())-45;
	$("#totalprice").text(b);
	var a=parseInt($(".n8").html())  - 1;
	 $(".n8").html(a);
	 	 var a=parseInt($("#totalproduct").text())  -  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".minus_button9").click(function(){
	var b=parseInt($("#totalprice").text())-90;
	$("#totalprice").text(b);
	var a=parseInt($(".n9").html())  - 1;
	 $(".n9").html(a);
	 	 var a=parseInt($("#totalproduct").text())  -  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".minus_button10").click(function(){
	var b=parseInt($("#totalprice").text())-90;
	$("#totalprice").text(b);
	var a=parseInt($(".n10").html())  - 1;
	 $(".n10").html(a);
	 	 var a=parseInt($("#totalproduct").text())  -  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
 $(".minus_button11").click(function(){
	var b=parseInt($("#totalprice").text())-90;
	$("#totalprice").text(b);
	var a=parseInt($(".n11").html())  - 1;
	 $(".n11").html(a);
	 	 var a=parseInt($("#totalproduct").text())  -  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});
$(".minus_button12").click(function(){
	var b=parseInt($("#totalprice").text())-90;
	$("#totalprice").text(b);
	var a=parseInt($(".n12").html())  - 1;
	 $(".n12").html(a);
	 	 var a=parseInt($("#totalproduct").text())  -  1;
	 $("#totalproduct").text(a);
	  var a=parseInt($("#cartid").text())  -  1;
	 $("#cartid").text(a);
});

