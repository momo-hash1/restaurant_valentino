import "./style/pages/index.scss";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";

let event_swiper = new Swiper(".event-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide:1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let blog_swiper = new Swiper(".blog-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide:1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
