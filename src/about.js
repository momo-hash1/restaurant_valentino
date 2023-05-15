import "./style/pages/about.scss";
import init_mobile_menu from "./mobile_menu";
import init_popups from "./popup";
import Swiper from "swiper";
import "swiper/css";
import init_nav from "./init_nav";

let interior_swiper = new Swiper(".interior-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 1,
});

document.querySelector(".video-overlay .button-circle").addEventListener("click", () => {
  document.querySelector(" .video-wrapper").classList.add("show-video")
  document.querySelector(".video video").play()
})

init_nav("interior", interior_swiper);
init_mobile_menu();
init_popups();
