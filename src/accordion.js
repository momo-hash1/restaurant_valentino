const init_accordion = () => {
    document.querySelectorAll('.accordion').forEach(accordion => {
        accordion.addEventListener("click", () => {
            accordion.classList.toggle("accordion-active")
            const body = accordion.querySelector(".body")
            if(body.style.maxHeight ){
                body.style.maxHeight  = null
            }else{
                body.style.maxHeight  = "min-content"
            }
        })
    })
}

export default init_accordion