import init_mobile_menu from "./mobile_menu";
import init_popups from "./popup";
import "./style/pages/events.scss"
import Swiper, { Navigation, Pagination } from 'swiper';
import "swiper/css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
document.querySelectorAll(".image-gallery").forEach(x => {
    new Swiper(x.querySelector(".swiper"), {
        slidesPerView: 1,
        loop: true,
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: x.querySelector(".next"),
            prevEl: x.querySelector(".prev"),
          },
          pagination: {el: x.querySelector(".slide-paginator")}
    })
})

init_mobile_menu();
init_popups();
