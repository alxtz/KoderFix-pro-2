/* ============================================================
 * Plugin Core Init
 * ============================================================ */
 
'use strict';

$(document).ready(function() {
    //Intialize Slider
    var slider = new Swiper('#home-hero-1 .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 1000
	});

	//Intialize Customer Logos Slider
	var customer_slider = new Swiper('#customerLogos_slider', {
		pagination: '.swiper-pagination-customers',
		paginationClickable: true,
		effect: 'fade',
		speed: 2000,
		autoplay: 5000
    });
});

// Pricing
function pricingSwap(interval) {
	if (interval == "monthly") {
		
		$(".pricing-monthly").show();
		$(".pricing-annual").hide();

		$("#bPricingAnnual").removeClass("btn-success");
		$("#bPricingMonthly").addClass("btn-success");

	} else {

		$("#bPricingMonthly").removeClass("btn-success");
		$("#bPricingAnnual").addClass("btn-success");

		$(".pricing-annual").show();
		$(".pricing-monthly").hide();
	}
}