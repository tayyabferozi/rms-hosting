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

var swiper = new Swiper("#main-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var splide = new Splide("#blog-slider-splide", {
  perPage: 3,
  breakpoints: {
    767: {
      perPage: 2,
      // gap: ".7rem",
      // height: "6rem",
    },
    575: {
      perPage: 1,
      // gap: ".7rem",
      // height: "6rem",
    },
  },
});

splide.mount();

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
