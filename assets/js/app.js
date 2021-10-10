function toggleSideNav() {
  console.log("something");
  $("#dark-overlay").toggleClass("active");
  console.log($("#dark-overlay"));
  $(".nav-sm").toggleClass("active");
}

$(".hamburger, #dark-overlay, #close").click(toggleSideNav);
