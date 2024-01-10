"use strict";

$(document).ready(function () {
  $("nav").on("click", ".hamburger-btn", function () {
    $(".hamburger-btn").hide();
    $(".close-btn").show();
    $(".hamburger-menu").show();
    $(".navigation").css("background-color", "rgba(1, 0, 26, 1)");
  });

  $("nav").on("click", ".close-btn", function () {
    $(".hamburger-btn").show();
    $(".hamburger-menu").hide();
    $(".close-btn").hide();
    $(".navigation").css("background-color", "rgba(1, 0, 26, 0.7)");
  });

});
