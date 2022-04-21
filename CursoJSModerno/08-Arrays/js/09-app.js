//.forEach para iterar un array 

const carrito = [
    {nombre: "Monitor 7 pulgadas", precio: 500},
    {nombre: "Television", precio: 500},
    {nombre: "Tablet", precio: 500},
    {nombre: "Audifonos", precio: 500},
    {nombre: "Teclado", precio: 500},
    {nombre: "Celular", precio: 500},
]

for(let i = 0; i< carrito.length; i++ ) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}{nombre: "Monitor 7 pulgadas" precio: 500}` );
}

//Un forEach es una funcion, lo que hara es lo mismo que tenemos arriba, que lo hicimos con un for loop. ambos se comportan igual
carrito.forEach(function(producto){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}{nombre: "Monitor 7 pulgadas" precio: 500}` );
})


