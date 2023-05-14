const init_popups = () => {
  document.querySelectorAll(".popup-initiator").forEach((initiator) => {
    initiator.addEventListener("click", () => {
      search_popup(initiator.dataset.to).classList.add("show-popup");
      document.querySelector(".popup-overlay").classList.add("show-popups");
      hide_scroll();
    });
  });

  hide_popups();
};

const hide_popups = () => {
  document.querySelectorAll(".popup-wrapper").forEach((popup) => {
    const close = popup.querySelector(".close-btn");
    if (close === null) return;
    close.addEventListener("click", () => {
      popup.classList.remove("show-popup");
      document.querySelector(".popup-overlay").classList.remove("show-popups");
      show_scroll();
    });
  });

  document.querySelector(".popup-overlay").addEventListener("click", (e) => {
    if (e.target.classList.contains("popup-wrapper")) {
        document.querySelectorAll(".popup-wrapper").forEach((popup) => {
          popup.classList.remove("show-popup");
          document.querySelector(".popup-overlay").classList.remove("show-popups");
        });
        show_scroll();
    };

  });
};

const show_scroll = () => {
  if (document.querySelector(".menu-active") !== null) return;
  document.querySelector("body").classList.remove("body-overflow");
};

const hide_scroll = () => {
  if (document.querySelector(".menu-active") !== null) return;
  document.querySelector("body").classList.add("body-overflow");
};

const search_popup = (query) => {
  return document.querySelector(`div[data-popup="${query}"]`);
};

export default init_popups;
