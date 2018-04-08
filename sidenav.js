"use strict";

window.onload = function () {
   
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
