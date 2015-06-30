$(function(){

	$("body").append("<div id='glayLayer'></div><div id='overLayer'><div class='overLayerContent'></div></div>");

	$("#glayLayer").click(function(){
		$(this).hide()
		$("#overLayer").hide();
	});

	$("a.youtube").click(function(){
		$("#glayLayer").show();

		$("#overLayer").show().find(".overLayerContent").html("<iframe src='"+$(this).attr("href")+"'>");
		var contentH = $(".overLayerContent").innerHeight();
		$("#overLayer").css({"height": contentH});
		return false;
	});



});
