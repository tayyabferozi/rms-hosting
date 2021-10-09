$(".qas .question").click(function () {
  $(this).next().slideToggle();
  $(this).toggleClass("close");
});
