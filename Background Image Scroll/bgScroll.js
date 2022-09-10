const bgEl = document.querySelector(".bgImage");

window.addEventListener("scroll", ()=>{
    bgEl.style.backgroundSize = 100 + window.pageYOffset/12+"%";
})