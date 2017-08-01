window.onload = function(){
//Левый сайтбар
function topSlider(){
     var Lmenu = document.getElementById("Lmenu");
	 var Lmenu_div = Lmenu.getElementsByTagName('div');

	Lmenu.onmouseover = function(el){
			var target = el.target;
		del_elem(Lmenu_div);
		var tag = target.tagName;
		if(tag == "A"){
			target.parentNode.classList.add('Lactive');
		}
		else{
			target.classList.add('Lactive');
		}
	}
	function del_elem(param){
			for(var i=0; i<param.length; i++){
				var r = param[i].classList.contains("Lactive");
				if(r == true){
					param[i].className = "";
			}
		}
	}
};
//Кнопки в Header
function activeButton(){
	$(".my-info div").click(function(elem){
		var target = $(elem.target);
		$(".my-info div").removeClass("my-info-active");
		 target.addClass("my-info-active");

	});
};

//Ползунок
function toddler(){
	var val = 10;
	var id=setInterval(function(){
		val++;
		var div = $(".inner_toddler").width(val+'%');
		if(val % 5 == 0){
			$(".my_skills_level span").text(val+"%");
		}
		if(val == 90){
			clearInterval(id);
		}
	},10)
 
};
$(window).on('scroll', function(){
var bo = $(this).scrollTop();
 			if(bo >= 330){
 				toddler();
				$(window).off('scroll');
 			}
});


//Анимация в header Портфолио и Онас
$(".head-text ul").width(($(".head-text ul").children().size()*$(".head-text li").width()));
var portfolio = function(){
    $(".my-info").click(function(elem){
        var amount;
        var target = $(elem.target);
        var cl = target.context.className.split(' ')[0];
        (cl == 'portfolio') ? amount=0 : amount=1;
        $(".head-text ul").animate({"left": -amount*$(".head-text li").width()},500);
    });
}
//Плавный скролл по странице
var scroll_page = function(){
  $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
   });
   return false;
}
//Эффект-hover при наведении в меню education
var hover_education = function(){
	$(".description__skills").hover(function(){
		$(this).find("h3").animate({color:"#5181FC"},500);
		$(this).prev(".number__skills").animate({color:"#5181FC"},500);
	},function(){
		$(this).find("h3").animate({color:"#4c4c4c"},500);
		$(this).prev().animate({color:"#4c4c4c"},500);
	})
}
//Слайдер для последних постов
var slider_post = function(){
var left=0;
var light = 0;
var elem = $(".top_days_week li");
elem[0].style.color="#5181FC";
var res = $(".slider_post_abs").width();
var li_width = $(".slider_post_abs li").width();


$(".right_arrow_post").click(function(){
	light++;
	if(light == 6){
		light = 0;
	}
		for(i=0;i<elem.length;i++){
		elem[i].style.color="#4c4c4c";
	}
		left = left - li_width;
		if(left == -li_width*$(".slider_post_abs li").size()){
			left=0;
		}
		slider_post_repeat_code();
});
$(".left_arrow_post").click(function(){
	if(light == 0){
		light = 6;
	}
	light--;
	for(i=0;i<elem.length;i++){
		elem[i].style.color="#4c4c4c";
	}
	if(left == 0){
			left = -li_width*$(".slider_post_abs li").size();
		}
		left = left + li_width;
		slider_post_repeat_code();

});
//Вывод результата(повторный код)
function slider_post_repeat_code(){
	var nav_left = 35;
	nav_left = nav_left+(light*$(".blue_active_line").width());
	$(".slider_post_abs").animate({"left": left+"px"},500);
	$(".blue_active_line").animate({"left": nav_left + "px"},500);
		setTimeout(function(){
			elem[light].style.color = "#5181FC";
		},500);
}
};
//Карусель
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    nav:false,
    margin:10,
    singleItem:true
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});



slider_post();
hover_education();
scroll_page();
portfolio();
activeButton();
topSlider();

















































}