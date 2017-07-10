$( document ).ready(function() {
    console.log( "ready!" );

/*This is completely wrong and I have no idea how to fix the html or the JS to make it work. I give up!*/

$(".readmore").click(readMore);
$(".readless").click(readLess);
$(".learnmore").click(learnMore);
$(".learnless").click(learnLess);

function readMore(event) {
  event.preventDefault();
    $(".readmore").hide();
    $("#show-on-click1").slideDown();
    $(".readless").show();
  }

  function readLess(event) {
    event.preventDefault();
    $(".readless").hide();
    $("#show-on-click1").slideUp();
    $(".readmore").show();
  }

  function learnMore(event) {
    event.preventDefault();
      $(".learnmore").hide();
      $("#show-on-click2").slideDown();
      $(".learnless").show();
  }

function learnLess(event) {
  event.preventDefault();
    $(".learnless").hide();
    $("#show-on-click3").slideUp();
    $(".learnmore").show();
  }


function start() {
  $("#signupbutton").click(function(event) {
      event.preventDefault();
  });
}

});
