const rightEl = document.querySelector(".btnr")
const leftEl = document.querySelector(".btnl")
const imgContainerEl = document.querySelector(".image_container")
let imageNum = 0;

updateImg();

imgContainerEl.addEventListener("mouseover",()=>{
    clearTimeout(timer)
})
imgContainerEl.addEventListener("mouseout",()=>{
    updateImg();
})


rightEl.addEventListener("click",()=>{
    clearTimeout(timer);
    imageNum++;
    updateImg();
    })


function updateImg(){
    if(imageNum > 3){
        imageNum = 0;
    }else if(imageNum < 0){
        imageNum = 3;
    }
imgContainerEl.style.transform = `translateX(-${imageNum*500}px )`;

 timer = setTimeout(() => {
    imageNum++
    updateImg();
}, 2000);
}


leftEl.addEventListener("click",()=>{
    clearTimeout(timer);
imageNum--;
updateImg();
})

