var $kayla = $('.kayla-lines');

// http://imakewebthings.com/waypoints/

$kayla.waypoint(function (direction) {
  if (direction == 'down') {
    $kayla.addClass('js-line-animate');
  } else {
    $kayla.removeClass('js-line-animate');
  }
}, {offset: '75%'});
