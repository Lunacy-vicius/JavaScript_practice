//Funciones en Objetos y acceder a sus valores

//This es una palabra reservada y al combinarla con variables ej. This.variable permite buscar esa variable dentro de ese objeto, hace que el alcance de las variables no se vaya afuera.
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${precio}`)
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 340,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${precio}`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();