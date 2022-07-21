import hamburguerMenu from "./menu_hamburguesa.js";

const d = document;
d.addEventListener("DOMContentLoaded",e=>{
        hamburguerMenu(".hamburger",".principal_header",".principal_header a");
})

var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });