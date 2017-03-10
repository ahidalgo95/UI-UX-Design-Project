$(".accordion-toggle").click(function() {
  console.log("click");
  $(this).find(".accordion-title").toggle();
  $(this).parent().find(".dropdown").toggle();
})

// $(".dropdown").click(function(e) {
//   e.stopPropagation();
//   $(".dropdown-menu").toggle();
// })
