//detener la ejecucion de un if con una funcion

const autenticado = true;

if(auntenticado) {
    console.log("el usuario esta auntenticado")
}
const puntaje = 450;

function revisarPuntaje() { 

    if(puntaje > 400) {
    console.log("Excelente");
    return;
    }  

if (puntaje > 300) {
    console.log("buen puntaje... Felicidades");
    return;
    }
}


revisarPuntaje();