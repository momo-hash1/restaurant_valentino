import "./style/pages/index.scss";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import init_accordion from "./accordion";
import init_mobile_menu from "./mobile_menu";
import init_popups from "./popup";

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

const init_nav = (swiper_name, swiper) => {
  const buttons = document.querySelectorAll(`.${swiper_name}-nav`)
  buttons[1].addEventListener("click", () => {
    swiper.slideNext()
  })
  buttons[0].addEventListener("click", () => {
    swiper.slidePrev()
  })
}

init_nav("event", event_swiper)
init_nav("blog", blog_swiper)
init_accordion()
init_mobile_menu()
init_popups()