function toggleSideNav() {
  console.log("something");
  $("#dark-overlay").toggleClass("active");
  console.log($("#dark-overlay"));
  $(".nav-sm").toggleClass("active");
}

$(".hamburger, #dark-overlay, #close").click(toggleSideNav);

$("#realms-hosting-panel .btn").click(function () {
  $("#realms-hosting-panel .btn").removeClass("bg-black");
  $(this).addClass("bg-black");
  $(".feature-img").attr("src", $(this).attr("data-img-name"));
});
