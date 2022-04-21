//el problema con los objetos. Una variable con const una vez definida no se le puede reasignar su valor.
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

/*const nombreProducto = "Monitor";
nombreProducto = "Tablet";
en este caso nos dara un error diciendo que no se puede reasignar la variable.*/
//Los objetos si se pueden reasignar, sin embargo una variable al estar definida en un objeto sus propiedades si son editables, reescribir o eliminar.
producto.disponible = false;

console.log(producto);