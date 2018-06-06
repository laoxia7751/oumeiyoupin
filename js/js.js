$(document).ready(function() {
	
	$('.lan span').on('click',function(e){
		if($('.lan ul').is(":hidden")){
			$('.lan ul').slideDown()
		}else{
			$('.lan ul').slideUp()
		}
		e.stopPropagation()
	})

	$('.lan ul li').each(function(){
		$(this).click(function(e){
			$('.lan span').text($(this).text())
			$('.lan ul').slideUp()
			e.stopPropagation()
		})
	})

	$('body,html').click(function(e){
		$('.lan ul').slideUp()
		e.stopPropagation()
	})



	//二级菜单
	var $w  =$(window).width()
	if($w>1220){
		PCNav()
	}else{
		mNav()
	}


	// 屏幕Resize

	$(window).resize(function(){
		var $w  =$(window).width()
		if($w>1220){
			PCNav()
			$('.TxtNav').show()
		}else{
			$('.TxtNav').hide()
			$('.co-nav').removeClass('active')
			mNav()
		}
	})

	$('.bandslick').slick({
        	dots: false,
        	arrows:true,
        	slidesToShow:8,
        	responsive: [
		    {
		      breakpoint: 1220,
		      settings: {
		        slidesToShow: 6,
		      }
		    },
		    {
		      breakpoint: 840,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 3,
		      }
		    }
		  ]
    	})
});


var mNav = function(){
	$('.nav ul li>a').each(function(){
		$(this).click(function(e){
			if($(this).parents('li').children().size()>1){
				if($(this).parents('li').children('.sed').is(":hidden")){
					$('.nav ul li').children('.sed').slideUp()
					$(this).parents('li').children('.sed').slideDown()
				}
				return false
			}	
		})
	})

	$('.co-nav').toggle(function(){
		$(this).addClass('active')
		$('.TxtNav').slideDown()
		$('.fide').show()
	},function(){
		$(this).removeClass('active')
		$('.TxtNav').slideUp()
		$('.fide').hide()
	})
}

var PCNav = function(){
		$('.lband dd').on('mouseenter',function(){
			$(this).parents('.txt').children('.tdGroup').children('.td').removeClass('on')
			$(this).parents('.txt').children('.tdGroup').children('.td').eq($(this).index()).addClass('on')
		})

		$('.cate>dl').children('dd').on('mouseenter',function(){
			//console.log($(this).index())
			$(this).parents('.cate').next('.picgroup').children('.pic').removeClass('active')
			$(this).parents('.cate').next('.picgroup').children('.pic').eq($(this).index()).addClass('active')
		})

		var timer = null
		$('.nav  ul li').each(function(){
			$(this).on('mouseenter',function(){
				clearTimeout(timer)
				var _This= $(this)
				timer = setTimeout(function(){
					_This.children('.sed').slideDown()
				},300)

			})
			$(this).on('mouseleave',function(){
				clearTimeout(timer)
				$(this).children('.sed').slideUp()
			})
		})

}

function showmod() {
    function setshow(obj) {
        var t=$(window).scrollTop();
        if(t<obj.attr('data-tops')&&t>obj.attr('data-topb')){
            return true;
        }else{
            return false;
        }
    }
    var win=$(window);
    var el=$('.animated');
    el.each(function () {
    var that=$(this);
    var time=$(this).attr('data-time');
    that.attr('data-topb',that.offset().top-win.height()-that.outerHeight()*.2);
    that.attr('data-tops',that.offset().top+that.outerHeight());
        if(setshow(that)){
            setTimeout(function(){
                 that.addClass('on');
            },time)
        }
    });
    if(el){
        var yesno=true;
        win.scroll(function () {
            if(yesno){
                yesno=false;
                setTimeout(function () {
                    el.each(function () {
                    var that=$(this);
                    var time=$(this).attr('data-time');
                    if(!that.hasClass('on')&&setshow(that)){
                        setTimeout(function(){
                            that.addClass('on');
                        },time)
                    }
                });
                    if($('.animated.on').length==el.length){
                        yesno=false;
                    }else{
                        yesno=true;
                    }
                },250);
            }
        })
    }
}

if($(window).width()>1200){
	showmod();
}else{
	$('.animated').addClass('on')
}

