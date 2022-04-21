//congelar un Objeto para no poderlo modificar

//use strict evalua el codigo de manera estricta sin malas practicas.
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
//object.freeze evita que mi objeto sea modificado
Object.freeze(producto);


//producto.disponible = false;
//producto.imagen = "imagen.jpg";

//delete producto.precio;

console.log(producto);


//Para saber si mi objeto esta congelado devolviendo true,
console.log(object.isFrozen(producto));

//Una vez habilitado use strict se puede habilitar  object methods