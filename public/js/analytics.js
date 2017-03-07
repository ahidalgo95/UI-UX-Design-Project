$(document).ready(function() {

  var hasScrolled=false;
  var hasClickedHelp = false;
  var hasClickedStart = false;
  var reached= false;

  // Scroll analytics event
  $(window).scroll(function() {
    if(hasScrolled === false) {
      console.log("scrolled");
      hasScrolled = true;
      ga("send", "event", "pagescroll", "scroll");
    }
  });

  // click help analytics event
  $("#menu-help").click(function() {
    var url=$(location).attr('href');

  // only run on index and secondHome pagescroll
    if(url.includes('index') || url.includes('secondHome')) {
        console.log("Clicked help")
        if(hasClickedHelp === false) {
          hasClickedHelp = true;
          ga("send", "event", "help", "click");
        }
    }
  });


  //click start button analytics event
  $("#start").click(function() {
    var url=$(location).attr('href');

  // only run on index and secondHome pagescroll
    if(url.includes('index') || url.includes('secondHome')) {
        console.log("Clicked start")
        if(hasClickedStart === false) {
          hasClickedStart = true;
          ga("send", "event", "start", "click");
        }
    }
  });


  // timer event
  function setTimerEvent(time, eventName) {
      return function() {
      var timer = setTimeout(function() {
        console.log(eventName);
        ga("send", "event", "pagetime", eventName);
      }, time);
    }
  }


$(window).scroll(function() {
  if ($(window).scrollTop() >= 1600) {
  // user scrolled amt  pixels or more;
  if(reached==false){
    reached=true;
    console.log("scrolled 5 recollections");
    ga("send", "event", "10recollections", "moved");
  }
} });

  var timerEvent15s = setTimerEvent(15000, "15 seconds");
  var timerEvent30s = setTimerEvent(30000, "30 seconds");
  var timerEventOneMin = setTimerEvent(60000, "One minute");

  // Bind the event.
  window.addEventListener("hashchange", changedURL, false);

  var url=$(location).attr('href');

// only run on index and secondHome pagescroll
  if(url.includes('index') || url.includes('secondHome')) {
    timerEvent30s();
    timerEventOneMin();
    timerEvent15s();
  }

  function changedURL() {
    console.log("URL was changed");
    var newURL=$(location).attr('href');

    if(! newURL.includes("index") || ! newURL.includes("secondHome")) {
      timer.clearTimeout();
    } else {
      if(!timer) {
        timerEvent15s();
        timerEvent30s();
        timerEventOneMin();

      }
    }
  }

});
