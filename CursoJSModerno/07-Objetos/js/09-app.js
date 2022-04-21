//sellar un objeto

"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}


//Seal tiene la diferencia a freeze que no se pueden agregar ni eliminar propiedades pero si se pueden modificar las existentes.
Object.seal(producto);

producto.disponible = false;
console.log(producto);


//para saber si mi objeto esta sellado se usa isSealed
console.log(object.isSealed(producto));