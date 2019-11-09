$(document).ready(function(){
    $(".drop-down").hover(function(){
      $(".menu", this).slideDown(100);
    }, function(){
      $(".menu", this).slideUp(100);
    });
  })