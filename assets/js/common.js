/*18-05-22改版 by:lx*/
$(function(){
	//footer tmall shop && sina blog
	$(".f_contact .tmall,.f_contact .sina").mouseover(function(){
		if ($(window).width() > 768) {
			$(this).find(".list").delay(500).addClass("show");
		}
	})

	$(".f_contact .tmall,.f_contact .sina").mouseout(function(){
		if ($(window).width() > 768) {
			$(this).find(".list").delay(500).removeClass("show");
		}
	})

	$(".f_contact .shop span").click(function(){
		if ($(window).width() < 769) {
			$(this).closest(".btn").find(".list").addClass("show");
		}
	})

	$(".f_contact .btn .list").click(function(e){
		if ($(window).width() < 769) {
			e.stopPropagation();
			if($(this).hasClass("show")){
				$(this).removeClass("show");
			}
		}
		
	})

	//scroll_top
	$(window).scroll(function(){
		var oH = $(document).height();
		var oTop = $(document).scrollTop();  
		oTop > 0.5*(oH - $(window).height()) ? $(".scroll_top").fadeIn() : $(".scroll_top").fadeOut();
	})
	
	$(".scroll_top").on('click', function() {
	    var $w = $(window);
	    $w.smoothScroll({position: 0});
	});
})