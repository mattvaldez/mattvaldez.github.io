$(document).ready(function(){
  $('.wat').on('mouseenter', function () {
    $(document.body).css( "background", "white" );
  })
  $('.wat').on('mouseleave', function () {
    $(document.body).css( "background", "url('../img/wat_mv.png') no-repeat center center fixed" );
  })
})
