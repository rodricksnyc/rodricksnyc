// ############################################################
// ######################## Applied JS ########################
// ############################################################

// Using a Flickity carousel with jQuery
// Initialization for carousel just attaches like any other jQuery method
// It works very similar to how you would define multiple CSS property/value pairs with the .css() method
// Check out the JSON notation for the options
$('.carousel-container').flickity({
  // options
  autoPlay: 2000,
  cellAlign: 'left',
  contain: true,
  setGallerySize: false,
  wrapAround: true
});

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
for (var i = 0; i < 25; i++) {
  var width = getRandomSize(400, 600);
  var height =  getRandomSize(400, 600);
  $('#favphotos2').append();
}
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
for (var i = 0; i < 25; i++) {
  var width = getRandomSize(400, 600);
  var height =  getRandomSize(400, 600);
  $('#favphotos1').append();
}
