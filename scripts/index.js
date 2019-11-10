let active = false;

$(document).ready(function () {
  //mobile view only
  if ($(window).width() <= 500){	
		$(".hamburger").click(function () {
      toggleMenu();
    });
    $(".menu li").click(function (){
      toggleMenu();
    })
	}	
});

const toggleMenu = function () {
  if (active === false) {
    $('.menu').show();
    $('.menu').addClass('menu-open');
    active = true;
  }
  else {
    $('.menu').hide();
    $('.menu').removeClass('menu-open');
    active = false;
  }
}