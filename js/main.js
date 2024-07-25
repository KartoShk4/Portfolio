$(document).ready(function () {

    // Vide.js - video background
    $('#header').vide('./video/nature', {
        bgColor: '#2E4133'
    });

    // Swiper
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSliders: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    // Текущий год в footer
    $(".footer-year").text((new Date).getFullYear());
});