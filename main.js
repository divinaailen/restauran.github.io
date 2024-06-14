const botones= document.getElementById("botones-abajo")
const boton= document.getElementById("boton-laterales")


botones.style.bottom="-100px"

setTimeout(() => {
    botones.style.bottom="0px"
    
}, 500);

 boton.style.bottom="-100px"

 setTimeout(() => {

    boton.style.bottom="0px"
    boton.style.transform = "rotate(0)"

 }, 500);




 