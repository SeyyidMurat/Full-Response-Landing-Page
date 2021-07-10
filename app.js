const menuBtn = document.querySelector(".menu__btn");
const navCloseBtn = document.querySelector(".nav__close-btn")
menuBtn.addEventListener("click", () => {
    document.body.classList.add("nav-is-open")
})

navCloseBtn.addEventListener("click", () => {
    document.body.classList.remove("nav-is-open")
})