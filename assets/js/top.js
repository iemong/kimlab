var bgImgWidth = 1250;
var bgImgHeight = 800;

$(function(){
	

	$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");
	
	$("#glayLayer").click(function(){
		$(this).hide()
		$("#overLayer").hide();
	});
	
	$("a.youtube").click(function(){
		$("#glayLayer").show();
		$("#overLayer").show().html("<iframe src='"+$(this).attr("href")+"'>");
		return false;
	});

	$(window).on('resize', function() {
		resize();
		
	});
	
});


function resize() {
	var getWidth = $(this).width();
	var getHeight = bgImgHeight / bgImgWidth * getWidth;
	$('body').animate( { "height" : getHeight }, 100);
	$('body').css("max-height",bgImgHeight);
}

function loadBgImage() {
	var img = new Image();
	img.src = $(this).css('background-image').replace(/url\(|\)$/ig, "");
	bgImgWidth = img.width;
	bgImgHeight = img.height;
}

