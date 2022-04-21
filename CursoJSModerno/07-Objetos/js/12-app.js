//El Object Constructor
//La creacion de los objetos se puede automatizar mas, anteriormente estabamos creando objetos bajo el concepto de object literal, ahora lo haremos con Object constructor, un enfoque acercado a POO

//Object literal
const producto = {
    nombre:"monitor de 20 pulgadas", 
    precio: 300,
    disponible: true
}
//Object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}
const producto2 = new Producto("Monitor de 24 Pulgadas", 500);
console.log(producto2);

const producto3 = new Producto("Television", 100);
console.log(producto3);
