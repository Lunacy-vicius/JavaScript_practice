//Comparar valores


const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


//Revisar si dos numeros son iguales
//recuerda que = es de asignacion y == es de comparacion o igualdad
console.log(numero1 == numero3);
console.log(numero1 == numero2);

//comparador Estricto

console.log(numero1 === numero2); //retorna Falso, es un comparador estricto, se fija en el tipo de dato.

//typeoff nos devuelve el tipo de dato 
console.log(typeof numero1);
console.log(typeof numero2);


//Diferente

const password1 = "admin";
const password2 = "Admin";


//!= nos indica o hace la pregunta de Es diferente a..?

console.log(password1 != password2);
console.log(numero1 != numero2);
console.log(numero1 !== numero2);