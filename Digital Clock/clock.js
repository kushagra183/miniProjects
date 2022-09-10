const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    if(h>12){
        h=h-12;
        ampm.innerText = "PM"
    }

    if(h<10){
        h = "0"+h;
    }
    if(s<10){
        s = "0"+s;
    }
    if(m<10){
        m = "0"+m;
    }

    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
setTimeout(()=>{
    updateClock();
}, 1000)
}

updateClock();

