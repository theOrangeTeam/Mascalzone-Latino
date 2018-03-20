<<<<<<< HEAD
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

    	// toggle menu function
	var menu = document.querySelector("#menu");

	menu.onclick = function () {

		var list = document.querySelector(".sideNav");
		var close = document.querySelector("#close")
		var overlay = document.createElement("div");
		overlay.setAttribute("id", "overlay");

		document.body.appendChild(overlay);
		list.classList.add("open");

		overlay.onclick = function () {
			list.classList.remove("open");
			document.body.removeChild(overlay);

		}

		close.onclick = function () {
			list.classList.remove("open");
			document.body.removeChild(overlay);
			
		}


    }

};



/* // SIDENAV

window.onload = function () {

}; */
=======
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
>>>>>>> 70a71b71410d5c3672da9319971c1337acd14dd0
