//La diferencia entre Fuction expression y function declaration radica en que javaScript se ejecuta en 2 vueltas En la primera busca las variables y funciones y en la segunda vuelta las ejecuta (Hoisting)

//Declaracion de funcion (Function declaration)
function sumar(){
    console.log(2+2);

}

sumar();
sumar();
sumar();

//Expresion de Funcion (Function Expression)
const sumar2 = function() {
    console.log(3+3);
}

sumar2();