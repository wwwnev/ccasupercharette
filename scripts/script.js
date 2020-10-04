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
    //alert("Yeah!");
    //$(".move").animate({top: '-750px'}, duration=4000);
    //$(".move").css("transform", "translate(0,1000px)")
    $(".move").toggleClass("clicked");
    $(".containerA").toggleClass("clicked");
    //$(".toto2").toggleClass("clicked");
    //$(".toto3").toggleClass("clicked");
    //setTimeout(function(){$(".move").removeClass("clicked")}, 3300);
    delay("accueil_fr.html")

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
