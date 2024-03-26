
var splash = $(".ReactModalPortal");
var menu = $(".mobile-menu");
$(window).on("load", function() {
  if(document.cookie.indexOf("visited=true") === -1) {
    splash.fadeOut(200);
    setTimeout(function(){
      splash.fadeIn(200);
    }, 5000);
  }
});

$(".ReactModal__Overlay--after-open").on("click", function(){
  splash.fadeOut(200);
});

$(".button-newsletter ").on("click", function(){
  splash.fadeToggle(200);
});

$(".open-menu ").on("click", function(){
  menu.slideDown(200);
});

$(".close-menu ").on("click", function(){
  menu.slideUp(200);
});