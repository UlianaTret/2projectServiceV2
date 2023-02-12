if (window.matchMedia("(max-width: 768px)").matches) {
	$(document).ready(function(){
		$('.slider').slick({
			arrows:true,
			dots:true,
			slidesToShow:1.1,
			autoplay:false,
			speed:1000
		});
	});
}

