const init_nav = (swiper_name, swiper) => {
  const buttons = document.querySelectorAll(`.${swiper_name}-nav`);
  buttons[1].addEventListener("click", () => {
    swiper.slideNext();
  });
  buttons[0].addEventListener("click", () => {
    swiper.slidePrev();
  });
};

export default init_nav;
