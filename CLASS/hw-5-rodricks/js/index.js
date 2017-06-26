$( document ).ready(function() {
    console.log( "ready!" );
});
/*This is completely wrong and I have no idea how to fix the html or the JS to make it work. I give up!*/

$(".readmore").click(readMore);
$(".readless").click(readLess);
$(".learnmore").click(learnMore);
$(".learnless").click(learnLess);

function readMore() {
    $(".readmore").hide();
    $("#show-on-click").slideDown();
    $(".readless").show();
  }

  function readLess() {
    $(".readless").hide();
    $("#show-on-click").slideUp();
    $(".readmore").show();
  }

  function learnMore() {
      $(".learnmore").hide();
      $("#show-on-click").slideDown();
      $(".learnless").show();
  }

function learnLess() {
    $(".learnless").hide();
    $("#show-on-click").slideUp();
    $(".learnmore").show();
  }


function start() {
  $("#signupbutton").click(function(event) {
      event.preventDefault();
  });
}
