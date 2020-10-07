function delay (URL) {
    setTimeout( function() { window.location = URL }, 3000 );
}

$(function(){
  $(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload();
    }
  });



  $("#fr_title").click(function() {
    event.stopPropagation()
    $("body").toggleClass("clicked");
    $(".containerA").toggleClass("clicked");
    delay("accueil_fadein_fr.html");
  });

  $("#en_title").click(function() {
    event.stopPropagation()
    $("body").toggleClass("clicked");
    $(".containerA").toggleClass("clicked");
    delay("accueil_fadein_en.html");
  });

  $("#html_index").click(function() {
    $("body").toggleClass("clicked");
    $(".containerA").toggleClass("clicked");
    delay("accueil_fadein_fr.html");
  });

  $("#html_index .container3 a").click(function() {
    event.stopPropagation();
  });

  $("#paragraphSuperDiv").scroll(function(){
    alert("SCROLS");
    scrollTop: $(".paragraph").offset().top;
  });
});
