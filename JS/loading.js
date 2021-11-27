$(document).ready(function() {
	// Will remove overlay for users cannnot load properly.
	setTimeout(function() {
        $('.Loadercontainer, .loader').css({'display':'none'})
	}, 29000);

	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
        $('.Loadercontainer, .loader').css({'display':'none'})
		setTimeout(function() {
			$('.Loadercontainer, .loader').css({'display':'none'})
			
		}, 29000)
	})
})


window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#Information';
		window.location.reload();
	}
}