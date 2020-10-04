function delay (URL) {
    setTimeout( function() { window.location = URL }, 3300 );
}

$(function(){
  $(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload()
    }
  });



  $("#fr_title").click(function() {
    $(".move").toggleClass("clicked");
    $(".containerA").toggleClass("clicked");
    delay("accueil_fadein_fr.html")
  });

  $("#en_title").click(function() {
    $(".move").toggleClass("clicked");
    $(".containerA").toggleClass("clicked");
    delay("accueil_fadein_en.html")
  });




});



/*$('button').click(function() {
    $(".move").addClass('animated');
    console.log('bbbbbKL');
    setTimeout(function() {
          $(".move").removeClass('animated');
          console.log('AKKIADWKL');
    }, 1500);
});
*/
