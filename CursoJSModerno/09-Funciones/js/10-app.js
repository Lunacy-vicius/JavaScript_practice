//Arrow functionss
//son otra forma de declarar funcione de una manera ma corta

//Esta es una declaracion normal
const aprendiendo = function() {
    console.log("Aprendiendo javaScript");
}

//Esta es una array function 
const aprendiendo2 = () => {
    console.log("Aprendiendo javaScript");
}
//Las arrow functions tambien se pueden declarar en una sola linea, dando por implicito el return con console.log
const aprendiendo3 = () => "Aprendiendo javaScript";

aprendiendo2();
aprendiendo3();