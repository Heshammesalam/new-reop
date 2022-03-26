/*global $, alert,console*/
$(function () {
  "use strict";
  // nice scroll

  //change header height
  $(".header").height($(window).height());
  // scroll to features
  $(".header .chevron i").click(function () {
    $("html , body").animate(
      {
        scrollTop: $(".features").offset().top,
      },
      1000
    );
  });
  $(".hire").click(function () {
    $("html , body").animate(
      {
        scrollTop: $(".our-team").offset().top,
      },
      1000
    );
  });
  // show hidden items
  $(".show-more").click(function () {
    $(".hidden").fadeIn(2000);
  });

  // check clients
  function checkClient() {
    if ($(".client:first").hasClass("active")) {
      $(".fa-chevron-left").fadeOut();
    } else {
      $(".fa-chevron-left").fadeIn();
    }
    if ($(".client:last").hasClass("active")) {
      $(".fa-chevron-right").fadeOut();
    } else {
      $(".fa-chevron-right").fadeIn();
    }
  }
  checkClient();
  // clicking

  $(".testimonials i").click(function (e) {
    if ($(this).hasClass("fa-chevron-right")) {
      $(".testimonials .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .next(".client")
          .addClass("active")
          .fadeIn();
        checkClient();
      });
    } else {
      $(".testimonials .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .prev(".client")
          .addClass("active")
          .fadeIn();
        checkClient();
      });
    }
  });
});
