//for of

const pendientes = ["tarea","comer","Proyecto","Estudiar JavaScript"];

const carrito = [
{nombre: "Monitor: de 25 pulgadas", precio: 500},
{nombre: "Television", precio: 200},
{nombre: "Tablet", precio: 300},
{nombre: "Audifonos", precio: 400},
{nombre: "Teclado", precio: 900},
{nombre: "Celulas", precio: 700},

]

for( let pendiente of pendientes) {
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.nombre)
}