
const producto = {
    nombre:"monitor de 20 pulgadas", 
    precio: 300,
    disponible: true
    //imagen: "imagen.jpg"
}


//Agregar nuevas propiedades al objeto
producto.imagen= "imagen.jpg";

//Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto)