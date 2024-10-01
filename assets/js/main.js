jQuery(document).ready(($) => {
  $(".banner").slick({
    arrows: false,
    dots: true,
    appendDots: $(".banner-dot"),
  });
  $(".newest").slick({
    dots: false,
    slidesToShow: 4,
    prevArrow: "<button class='prev-btn'></button>",
    nextArrow: "<button class='next-btn'></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".projects").slick({
    dots: false,
    slidesToShow: 3,
    prevArrow: "<button class='prev-btn type2'></button>",
    nextArrow: "<button class='next-btn type2'></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $("#open-res-h").on("click", () => {
    $(".toggle-h").addClass("show");
    $("#overlay").addClass("show");
  });
  $("#overlay").on("click", () => {
    $(".toggle-h").removeClass("show");
    $("#overlay").removeClass("show");
  });
});
