//Eliminar Elementos de un arreglo

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


carrito.unshift(producto3)

//Eliminar un elemento de un arreglo. Popo elimina el ultimo elemento de un arreglo
carrito.pop();

//Si se quiere eliminar desde el inicio del arreglo se utiliza 
carrito.shift();

//Para eliminar desde una posicion determinada y cuantos elementos quieres eliminar se usa splice
carrito.splice(1,2);
console.table(carrito);