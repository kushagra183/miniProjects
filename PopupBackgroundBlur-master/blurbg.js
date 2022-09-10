const containerEl = document.querySelector(".container");
const popupEl = document.querySelector(".popup");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popupEl.classList.remove("active");
})

const closeIconEl = document.querySelector(".closeIcon");

closeIconEl.addEventListener("click", ()=>{
    popupEl.classList.add("active");
    containerEl.classList.remove("active");
})
