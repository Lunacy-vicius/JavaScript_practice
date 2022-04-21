//Arrow Functions en un forEach y un map 

const carrito = [
    {nombre: "Monitor 7 pulgadas", precio: 500},
    {nombre: "Television", precio: 500},
    {nombre: "Tablet", precio: 500},
    {nombre: "Audifonos", precio: 500},
    {nombre: "Teclado", precio: 500},
    {nombre: "Celular", precio: 500},
]

const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}{nombre: "Monitor 7 pulgadas" precio: 500}`;
})

const nuevoArreglo2 = carrito.forEach(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}{nombre: "Monitor 7 pulgadas" precio: 500}`;
})
console.log(nuevoArreglo);
console.log(nuevoArreglo2);