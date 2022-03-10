$(document).ready(function () {
  /* For the stick navigation */
  var waypoint = new Waypoint({
    element: document.querySelector(".section-features"),
    handler: function (direction) {
      if (direction == "down") {
        $("nav").addClass("stick");
      } else {
        $("nav").removeClass("stick");
      }
    },
    offset: 60,
  });

  /* Scroll on buttons */
  $(".js--scroll-to-plan").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top - 50 },
      1000
    );
  });

  /*Animation*/
  $(".js_wp_1").waypoint(
    function () {
      $(".js_wp_1").addClass("animate__animated animate__fadeIn");
    },
    { offset: "40%" }
  );

  $(".js_wp_2").waypoint(
    function () {
      $(".js_wp_2").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "50%" }
  );

  $(".js_wp_3").waypoint(
    function () {
      $(".js_wp_3").addClass("animate__animated animate__zoomIn");
    },
    { offset: "50%" }
  );

  /* Mobile nav */
  $(".mobile-nav-icon").click(function () {
    var nav = $(".main-nav");
    var icon = document.querySelector(".mobile-nav-icon-btn");

    nav.slideToggle(200);

    if (icon.name == "menu-outline") {
      icon.name = "close-outline";
    } else {
      icon.name = "menu-outline";
    }
  });
});
