const producto = "Monitor 20 pulgadas";

//.repetear te va a permitir repetir una cadena de texto...

const texto = " en Promocion".repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//split, permite dividir un String


const actividad = "Estoy aprendiendi javaScript";
console.log(actividad.split(" "));

const hobbies = "Leer, Caminar, escuchar musica, escribir, aprender a programar";
console.log(hobbies.split(", "));

const tweet = "Aprendiendo javaScript #Moderno";
console.log(tweet.split("#"))