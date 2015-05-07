$('.push-down').mouseenter(function() {
	$('.js-oculus-image').removeClass('oculus-image-out');
	$('.js-oculus-image').addClass('oculus-image-in');
});

$('.push-down').mouseleave(function() {
	$('.js-oculus-image').removeClass('oculus-image-in');
	$('.js-oculus-image').addClass('oculus-image-out');
});