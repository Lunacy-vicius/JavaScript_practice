//crear nuevo arreglo con el spread operator 

const carrito = [];

//definir un producto
const producto ={
    nombre: "Monitor de 32 pulgadas",
    precio: 3400
}
const producto2 ={
    nombre: "Celular",
    precio: 800
}
const producto3 = {
    nombre: Teclado,
    precio: 50
}
let resultado;

resultado = [...carrito, producto];
resultado = [...carrito, producto2];
resultado = [producto, ...carrito];

//en las nuevas versiones hay funciones declarativas e imperativas, la forma imperativa se mostro anteriormente en la seccion 5, sobre esta variable se trabaja y se modifican los datos. la forma declarativa es un paradigma que expresa a la logica

console.table(resultado);