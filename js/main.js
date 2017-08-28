$(document).ready(function(){
  $('.show-projects').on('mouseenter', function () {
    $(document.body).css( "background", "white" );
  })
  $('.show-projects').on('mouseleave', function () {
    $(document.body).css( "background", "url('../img/wat_mv.png') no-repeat center center fixed" );
  })
})
