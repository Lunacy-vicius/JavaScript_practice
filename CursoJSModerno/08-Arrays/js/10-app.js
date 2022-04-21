//. map para iterar un array 
const carrito = [
    {nombre: "Monitor 7 pulgadas", precio: 500},
    {nombre: "Television", precio: 500},
    {nombre: "Tablet", precio: 500},
    {nombre: "Audifonos", precio: 500},
    {nombre: "Teclado", precio: 500},
    {nombre: "Celular", precio: 500},
]
//Un map e igual en sintaxis que el foreach, la diferencia esta en que map te crea un arreglo nuevo.
const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}{nombre: "Monitor 7 pulgadas" precio: 500}`;
})

const nuevoArreglo2 = carrito.forEach(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}{nombre: "Monitor 7 pulgadas" precio: 500}`;
})
console.log(nuevoArreglo);
console.log(nuevoArreglo2);