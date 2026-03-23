const html = document.querySelector("html")
const toggle = document.querySelector(".toggle")
const links = document.querySelectorAll("nav a")

toggle.addEventListener("click", () => {
    html.classList.toggle("active")
})

links.forEach(link =>{
    link.addEventListener("click", () => {
        toggle.checked = false
        if (html.classList == "active") {
            html.classList.remove("active")
        }
    })
})

window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
        html.classList.remove("active")
        toggle.checked = false
    }
})