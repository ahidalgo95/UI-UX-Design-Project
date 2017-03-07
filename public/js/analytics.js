var hasScrolled=false;

$(window).scroll(function() {
  if(hasScrolled === false) {
    hasScrolled = true;
    ga("send", "event", "pagescroll", "scroll");
  }
});
