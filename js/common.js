$(function (){
  $('.gnb > li').mouseenter(function(){
    $(this).find('.depth2').stop().slideDown();
  })//mouseenter
  $('.gnb > li').mouseleave(function(){
    $(this).find('.depth2').stop().slideUp();
  })//mouseenter
})