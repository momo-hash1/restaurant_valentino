const init_mobile_menu = () => {
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".header-wrapper").classList.add("menu-active")
        document.querySelector("body").classList.add("body-overflow")
    })


    document.querySelector(".menu-opener .close").addEventListener("click", () => {
        document.querySelector(".header-wrapper").classList.remove("menu-active")
        document.querySelector("body").classList.remove("body-overflow")

    })
}

export default init_mobile_menu