"use strict";

$(document).ready(function () {
  $(".image-over").click(function () {
    const category = $(this).parent().parent().prop("className").split(" ")[1];
    const title = $(this).siblings("img").prop("src").split("/")[6];
    const numberOfImages = Number(
      $(this).siblings("img").prop("className").split("-")[1]
    );
    let imageSrc = `./images/works/${category}/${title}`;

    for (let i = 1; i <= numberOfImages; i++) {
      $(".modal .image-area").append(`<img src="${imageSrc}/${i}.jpg">`);
    }

    $(".modal").addClass(category);
    $(".modal").show();
    $(".modal-background").show();
  });

  $(".close-btn").on("click", function () {
    $(".modal").attr("class", "modal");
    $(".modal .image-area").empty();
    $(".modal").hide();
    $(".modal-background").hide();
  });
});
