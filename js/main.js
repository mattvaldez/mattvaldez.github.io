$(document).ready(function(){
  $('.wat').on('mouseenter', function () {
    $(this).css( "background", "white" );
    $('body').css( "background", "#2ecc71" );
    $('.links').show();
  })
  $('.wat').on('mouseleave', function () {
    $(this).css( "background", "url('img/wat_mv.png') no-repeat center center fixed" );
    $('body').css( "background", "white" );
    $('.links').hide();
  })
})
