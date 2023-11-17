(function ($) { "use strict"; var spinner = function () { setTimeout(function () { if ($('#spinner').length > 0) { $('#spinner').removeClass('show'); } }, 1); }; spinner(); new WOW().init(); $(window).scroll(function () { if ($(this).scrollTop() > 300) { $('.sticky-top').addClass('shadow-sm').css('top', '0px'); } else { $('.sticky-top').removeClass('shadow-sm').css('top', '-100px'); } }); $(window).scroll(function () { if ($(this).scrollTop() > 300) { $('.back-to-top').fadeIn('slow'); } else { $('.back-to-top').fadeOut('slow'); } }); $('.back-to-top').click(function () { $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo'); return false; }); $('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 2000 }); var portfolioIsotope = $('.portfolio-container').isotope({ itemSelector: '.portfolio-item', layoutMode: 'fitRows' }); $('#portfolio-flters li').on('click', function () { $("#portfolio-flters li").removeClass('active'); $(this).addClass('active'); portfolioIsotope.isotope({filter: $(this).data('filter')}); }); $(document).ready(function() { $('a[href^="#"]').on('click', function(event) { var target = $(this.getAttribute('href')); if (target.length) { event.preventDefault(); $('html, body').stop().animate({ scrollTop: target.offset().top }, 1000); } }); }); $(".testimonial-carousel").owlCarousel({ autoplay: true, smartSpeed: 1000, items: 1, dots: false, loop: true, nav: true, navText : [ '<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>' ] }); })(jQuery); var video = document.getElementById("myVideo"); function playVideo() { video.play(); } function pauseVideo() { video.pause(); } 
// Ensure the DOM is ready
$(document).ready(function () {
    // Initialize Isotope after images are loaded
    $('.portfolio-container').imagesLoaded(function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        // Filter on click
        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('active');
            $(this).addClass('active');
            portfolioIsotope.isotope({ filter: $(this).data('filter') });
        });
    });
});
function startVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}