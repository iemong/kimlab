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
			
		});