$(document).ready(function(){
	$("#header_des").hover(
		function(){
			$("#header_des_top").text("resume");
			$("#header_des_bottom").text("服务器开发");
		},
		function(){
			$("#header_des_top").text("张凯");
			$("#header_des_bottom").text("个人简历");
		}
	);
    $("#home_head_content").hover(
    	function(){
    		$("#home_photo1").animate({opacity:"0"});
    		$("#home_photo2").animate({opacity:"1"});
    	},
    	function(){
    		$("#home_photo1").animate({opacity:"1"});
    		$("#home_photo2").animate({opacity:"0"});
    	}
    );
    $(".skill_scale").hover(
    	function(){
    		$(this).children(".skill_flag").addClass("skill_flag_scale");
    		$(this).children(".skill_int").show();
    	},
    	function(){
			$(this).children(".skill_flag").removeClass("skill_flag_scale");
			$(this).children(".skill_int").hide();
    	}
    );

	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b','#1bbc9b','#1bbc9b','#1bbc9b','#1bbc9b','#1bbc9b'],
		'navigation': true,

	});

});
