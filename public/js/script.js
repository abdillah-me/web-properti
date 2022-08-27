const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
   if (window.scrollY > 5) {
      navbar.classList.replace("bg-transparent", "navbar-color");
   } else if (this.window.screenY <= 5) {
      navbar.classList.replace("navbar-color", "bg-transparent");
   }
});
