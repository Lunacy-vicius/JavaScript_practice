//break y continue
//crea un for loop que al detectar el elemento 5 se detenga su ejecución

for( let i = 0; i <= 10; i ++) {
    if(i === 5) {
        console.log("CINCO");
        continue;
        break;
    }
    console.log(`Numero: ${i}`)
}

const carrito = [
    {nombre: "Monitor 7 pulgadas", precio: 500},
    {nombre: "Television", precio: 500},
    {nombre: "Tablet", precio: 500, descuento: true},
    {nombre: "Audifonos", precio: 500},
    {nombre: "Teclado", precio: 500},
    {nombre: "Celular", precio: 500},
]

for(let i = 0; i< carrito.length; i ++){
    console.log(carrito[i].descuento);
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue
    }
    console.log(carrito[i].nombre)