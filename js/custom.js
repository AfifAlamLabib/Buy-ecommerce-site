$(function() {

    $('.banner_for_slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,

        prevArrow: '.banner_prev',
        nextArrow: '.banner_next'


    });
    $('.partner_item_main').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        centerPadding: '0px',

        prevArrow: '.about_page_partner_prev',
        nextArrow: '.about_page_partner_next',
        responsive: [{
                breakpoint: 1121,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]





    });


    $('.latest_product_home_for_slick_slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,


        prevArrow: '.latest_product_home_prev',
        nextArrow: '.latest_product_home_next',
        responsive: [{
                breakpoint: 1121,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });

    $('.testi').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 7000,

        prevArrow: '.testimonial_home_prev',
        nextArrow: '.testimonial_home_next',
        responsive: [{
                breakpoint: 1121,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("new_product_days").innerHTML = days;
        document.getElementById("new_product_hours").innerHTML = hours;
        document.getElementById("new_product_min").innerHTML = minutes;
        document.getElementById("new_product_sec").innerHTML = seconds;

        // If the count down is over, write some text 

    }, 1000);








})