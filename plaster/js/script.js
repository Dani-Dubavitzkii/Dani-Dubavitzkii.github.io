$(document).ready(function(){
	$('.slider').slick({
		infinite:true,
		slidesToShow:4,
		slidesToScroll:1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.s-slider').slick({
		arrows:true,
		draggable:false,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					arrows:false,
					slidesToShow:1,
					slidesToShow:1,
					dots:true
				}
			}
		]
	});
});
