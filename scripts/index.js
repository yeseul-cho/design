"use strict";

$(document).ready(function () {
  $("nav").load("../components/nav.html");

  $("nav").on("click", ".hamburger-btn", function () {
    $(".hamburger-btn").hide();
    $(".close-btn").show();
    $(".hamburger-menu").show()
  });

  $("nav").on("click", ".close-btn", function () {
    $(".hamburger-btn").show();
    $(".hamburger-menu").hide();
    $(".close-btn").hide();
  });
});
