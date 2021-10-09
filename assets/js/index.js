$("#blog-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#blog-slider").on("setPosition", function () {
  $(".slick-active").each(function (i, el) {
    $(this).css("transform", "scale(1.0)");
    if (i === 1) {
      $(this).css("transform", "scale(0.9)");
    } else if (i === 2) {
      $(this).css("transform", "scale(0.85)");
    }
  });
});
