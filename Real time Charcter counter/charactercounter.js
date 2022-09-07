
// document.getElementById("textarea").setAttribute("maxlength", "150"); incase you want to set the maxlength from js
document.querySelector("h2").innerText="Real time character counter" //changed the heading

document.getElementById("textarea").addEventListener("keyup", ()=>{

     document.getElementById("total-counter").innerText = document.getElementById("textarea").value.length;
     document.getElementById("remaining-counter").innerText = document.getElementById("textarea").getAttribute("maxlength") - document.getElementById("textarea").value.length;
    }) 
