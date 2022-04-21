//convertir a String numeros.

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;

//Parse int convierte mi string a un entero, pero recuerda un float es diferente al igual que las letras.
console.log(Number.parseInt(numero1));


//parseFloat convierte mi string a un numero flotante.
console.log(Number.parseFloat(numero2));


//Esta preguntando si el numero es un entero y devuelve un boleano.
console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero4));

