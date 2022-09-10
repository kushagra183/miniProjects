let num1 = Math.floor(Math.random()*10);

let num2=Math.floor(Math.random()*10);

document.getElementById("question").innerText = `What is ${num1} multiply by ${num2}?`;

let score=JSON.parse(sessionStorage.getItem('SCORE'));

if(!score){
    score = 0;
}
const inputvalue = document.getElementById("input")
document.getElementById("score").innerText=`Score: ${score}`

const butt = document.getElementById("btn");

butt.addEventListener("click", ()=>{
if(+inputvalue.value === num1*num2){
    score++;
    console.log(score)
    updatesessionstorage();
}
else{
    score--;
    updatesessionstorage();   
}
})

function updatesessionstorage(){
sessionStorage.setItem("SCORE", JSON.stringify(score) )
}