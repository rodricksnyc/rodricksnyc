$(document).ready(function(){


$("#submit-btn").click(addCity);
function addCity(event) {
event.preventDefault();
var city = $('#city-type').val();



if (city === 'New York' || city === 'NYC' || city === 'New York City') {
  $('body').removeClass('sf la austin sydney').addClass('nyc');
} else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
  $('body').removeClass('nyc la austin sydney').addClass('sf');
} else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
  $('body').removeClass('nyc sf austin sydney').addClass('la');
} else if (city === 'Austin' || city === 'ATX') {
  $('body').removeClass('nyc sf la sydney').addClass('austin');
} else if (city === 'Sydney' || city === 'SYD') {
  $('body').removeClass('nyc sf la austin').addClass('sydney');
} else {
  alert('There is no pic of this city. Sorry!');
}
}
});
