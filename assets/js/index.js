$("#blog-slider").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:
    "<button class='slick-prev slick-arrow'><img src='./assets/images/slider-arrow-prev.png' /></button>",
  nextArrow:
    "<button class='slick-next slick-arrow'><img src='./assets/images/slider-arrow-next.png' /></button>",
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 579,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#main-slider").slick();

$("#blog-slider").on("beforeChange", function () {
  $(".slick-active").each(function (i, el) {
    $(this).css("transform", "scale(1.0)");
    if (i === 1) {
      $(this).css("transform", "scale(0.9)");
    } else if (i === 2) {
      $(this).css("transform", "scale(0.85)");
    }
  });
});

function toggleSideNav() {
  $("#dark-overlay").toggleClass("active");
  $(".nav-sm").toggleClass("active");
}

$(".hamburger, #dark-overlay, #close").click(toggleSideNav);
