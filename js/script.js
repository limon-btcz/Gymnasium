$(function(){

    // slider part 
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // about video part
    $('.venobox').venobox();

    // testimonial slider part 
    $('.test_inner').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 2000,

              }
            }
          ]
    });

    // counter part
    $('.counter').counterUp({
        delay: 8,
        time: 1000,
    });

    // brand slider
    $('.brand_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right next_arr"></i>',
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 2000,
                arrows: false,
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 2000,
              }
            }
          ]
    });

    // team slider
    $('.team_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 2000,

              }
            }
          ]
    });

});