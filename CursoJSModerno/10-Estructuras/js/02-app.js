//comparador estricto

const puntaje = 1000;
if(puntaje != 1000) {
    console.log("si es diferente")
} 


if(puntaje == "1000") {
    console.log("si es igual")
} 

//=== es un comparador mas estricto, el tipo de dato es un numero y el otro es un string 
if(puntaje === "1000") {
    console.log("si es diferente")
} 