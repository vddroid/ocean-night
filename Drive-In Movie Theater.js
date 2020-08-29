let menuIcon = document.querySelector(".js_menu_group");
let menuItemSmall = document.querySelector(".js_menu_item_small");
let closeBtn = document.querySelector(".js_close_btn");

menuIcon.addEventListener("click", function () {
   menuItemSmall.style.display = "flex";
   disableWindowScroll();
});

closeBtn.addEventListener("click", function () {
   menuItemSmall.style.display = "none";
   enableWindowScroll();
});

var winX = null,
   winY = null;
window.addEventListener("scroll", function () {
   if (winX !== null && winY !== null) {
      window.scrollTo(winX, winY);
   }
});
function disableWindowScroll() {
   winX = window.scrollX;
   winY = window.scrollY;
}
function enableWindowScroll() {
   winX = null;
   winY = null;
}

// Go to top button
let mybutton = document.getElementById("js_top_btn");

mybutton.addEventListener("click", function topFunction() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
   ) {
      mybutton.style.display = "block";
   } else {
      mybutton.style.display = "none";
   }
}
