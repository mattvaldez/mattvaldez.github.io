$(document).ready(function(){
  $('.resume').hide();
  $('.card').on('mouseenter', function () {
    $('.resume').show();
  })
  $('.card').on('mouseleave', function () {
    $('.resume').hide();
  })
})
