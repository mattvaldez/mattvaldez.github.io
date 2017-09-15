$(document).ready(function(){
  $('.wat').on('mouseenter', function () {
    $(this).css( "background", "white" );
    $('.links').show();
  })
  $('.wat').on('mouseleave', function () {
    $(this).css( "background", "url('img/wat_mv.png') no-repeat center center fixed" );
    $('.links').hide();
  })
})
