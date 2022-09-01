//Javascript tiene sus propios iteradores por ejemplo for each

const pendientes = ["tarea","comer","Proyecto","Estudiar JavaScript"];

pendientes.forEach( (pendiente, indice)=>{
    console.log(`${indice} : ${pendiente}`)
})
const carrito = [
{nombre: "Monitor: de 25 pulgadas", precio: 500},
{nombre: "Television", precio: 200},
{nombre: "Tablet", precio: 300},
{nombre: "Audifonos", precio: 400},
{nombre: "Teclado", precio: 900},
{nombre: "Celulas", precio: 700},

]
const nuevoArreglo = carrito.forEach(producto => producto.nombre);

const nuevoArreglo2 = carrito.map( (producto)=> producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

//.map no te crea un nuevo arreglo