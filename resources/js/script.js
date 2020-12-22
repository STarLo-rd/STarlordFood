$(document).ready(function(){

  /*for example lets make a h1 background color red when the cursor or mouse click on it
  $('h1').click(function() {
    $(this).css('background-color','#ff0000')
  })
  */

  /* Scroll on Buttons*/
    $('.js--scroll-to-plans').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);

  });


});
