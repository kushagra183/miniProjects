const kickEl = document.getElementById("kick");
const snareEl = document.getElementById("snare");
const crashEl = document.getElementById("crash");
const tomEl = document.getElementById("tom");

const kickAudioEl = document.getElementById("kickAudio");
const snareAudioEl = document.getElementById("snareAudio");
const crashAudioEl = document.getElementById("crashAudio");
const tomAudioEl = document.getElementById("tomAudio");

kickEl.addEventListener("click", () => {
  kickAudioEl.play();
});
snareEl.addEventListener("click", () => {
  snareAudioEl.play();
});
crashEl.addEventListener("click", () => {
  crashAudioEl.play();
});
tomEl.addEventListener("click", () => {
  tomAudioEl.play();
});

window.addEventListener("keydown",(event)=>{
if(event.key == "c"){
    crashAudioEl.play();
}
else if(event.key == "k"){
    kickAudioEl.play();
}
else if(event.key == "s"){
    snareAudioEl.play();
}
else if(event.key == "t"){
    tomAudioEl.play();
}
})