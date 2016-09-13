// Agency Theme JavaScript


$(document).ready(function() {

$('#particles').particleground({
  minSpeedX: 0.1,
  maxSpeedX: 0.5,
  minSpeedY: 0.1,
  maxSpeedY: 0.5,
  directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
  directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
 density: 9000, // How many particles will be generated: one particle every n pixels
  dotColor: '#8887bd',
  lineColor: '#8e8dac',
  particleRadius: 7, // Dot size
  lineWidth: 1,
  curvedLines: false,
  proximity: 100, // How close two dots need to be before they join
  parallax: true,
  parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
});




});

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top )
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
