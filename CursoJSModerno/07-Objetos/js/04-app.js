//como acceder a valore de un objeto y aignarlo a una variable, Detructuring de objetos.
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//const nombre = producto.nombre;
//console.log(nombre);

//Destructuring ademas de extraer el valor, crea la variable
const {nombre, precio, disponible, noExiste} = producto;
console.log(nombre)
console.log(precio)
console.log(diponible)
console.log(noExiste);

