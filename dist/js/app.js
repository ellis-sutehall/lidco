$('.product-carousel').slick({
    autoplay: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    // adaptiveHeight: true,
});

// Run only on large screens
if (screen.width > 768) {
    // Get DOM elements
    var caption = document.querySelectorAll('.product-interactive .caption');
    var captionTrigger = document.querySelectorAll('.caption-trigger');
    // Loop all triggers, listen for mouseover, change visibility
    captionTrigger.forEach(function (trigger) {
        trigger.addEventListener('mouseover', function () {
            var captionParent = trigger.closest('.caption');
            captionParent.style.visibility = 'visible';
        });
    });

    captionTrigger.forEach(function (trigger) {
        trigger.addEventListener('mouseout', function () {
            var captionParent = trigger.closest('.caption');
            captionParent.style.visibility = 'hidden';
        });
    });
}
