/*//Añadir nuevos elementos al fin o al inicio de un array
const meses = ["Enero", "Febrero", "Marzo"];
meses[3] = "Abril";
console.table(meses);
//En el caso anterior se puede observar como se añade un arreglo sin embargo esto no es util si no conoces la posicion de tus valores en los arreglos por lo que se puede recurrir a los metodos de los arreglos

//Agregar al final del arreglo sin conocer la extension
meses.push("Mayo");

console.table(meses);
*/
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

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);

console.table(carrito);