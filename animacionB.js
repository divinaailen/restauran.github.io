const comprovacion= document.getElementById("comprovacion")
const name= document.getElementById("name")
const surname= document.getElementById("surname")
const email= document.getElementById("email")
const number= document.getElementById("number")
const work= document.getElementById("work")
const envio= document.getElementById("envio")
const panel= document.getElementById("panel")


 envio.addEventListener('click', ()=> {
    panel.style.top ="100px"
    console.log("funciono")

    setTimeout(() => {

            panel.style.top ="-100px"
     }, 2000);
 });
