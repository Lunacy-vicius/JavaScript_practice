//Comparar Null y Undefined

//Undefined --> En un valor no definido, typeof nos devuelve undefined tal cual.
let numero;
console.log(numero);
console.log(typeof numero);


//Null -->En un null typeoff nos devuelve que es un objeto, dadas las especificaciones de la Ecmascrip6
let numero2 = null;
console.log(numero2);
console.log(typeof numero2);


//Comparacion: si comparamos con == nos dara true, si lo hacemos con el comparador stricto nos dara false.

console.log(numero === numero2);