$(document).ready(function () {

    // Vide.js - video background
    $('#header').vide('./video/nature', {
        bgColor: '#2E4133'
    });

    // Текущий год в footer
    $(".footer-year").text((new Date).getFullYear());
});