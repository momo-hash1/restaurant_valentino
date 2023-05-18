import "./style/pages/index.scss";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import init_accordion from "./accordion";
import init_mobile_menu from "./mobile_menu";
import init_popups from "./popup";
import init_nav from "./init_nav";

let event_swiper = new Swiper(".event-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let blog_swiper = new Swiper(".blog-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 1,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

init_nav("event", event_swiper);
init_nav("blog", blog_swiper);
init_accordion();
init_mobile_menu();
init_popups();
