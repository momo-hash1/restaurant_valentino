import init_mobile_menu from "./mobile_menu";
import init_popups from "./popup";


const menu_page_base = () => {
    init_mobile_menu()
    init_popups()

    document.querySelector(".back-up button").addEventListener("click", () => {
        window.scrollTo(0, 0)
    })
}

export default menu_page_base