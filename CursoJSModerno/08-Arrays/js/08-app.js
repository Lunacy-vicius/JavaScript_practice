//destructuring para arrays

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const {disponible} = producto;

console.log(disponible);


//Destructuring con Arreglos
const numeros = [10,20,30,40,50];

const[ primero, ...tercero]= numeros;
console.log(primero);
console.log(Tercero);

