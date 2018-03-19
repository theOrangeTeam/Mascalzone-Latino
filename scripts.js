"use strict";

window.onload = function () {
    //slider
    var slideIndex = 1;
    var gallery = document.querySelectorAll(".slider figure");
    var sliderControls = document.querySelector(".slider ol");

    if (gallery) {
        showSlide(slideIndex);

        function changeSlide(n) {
            showSlide(slideIndex = n);
        };

        function showSlide(n) {
            if (n > gallery.length) { slideIndex = 1 };
            if (n < 1) { slideIndex = gallery.length };
            var dots = document.querySelectorAll(".slider ol li");

            gallery.forEach(e => {
                e.style.display = "none";
            });

            dots.forEach((d, i) => {
                d.className = d.className.replace("active", "");
                d.onclick = () => {
                    changeSlide(i + 1);
                };
            });

            dots[slideIndex - 1].className += "active";
            gallery[slideIndex - 1].style.display = "flex";
            gallery[slideIndex - 1].style.opacity = "1";
        };

    };
};