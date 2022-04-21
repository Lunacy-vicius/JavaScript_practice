//Destructuring de objetos anidados

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medida:{
            peso: "1kg",
            medida:"1m"
        },
        fabricacion: {
            pais: "China"
        }
    }
}

//destructuring puede ser muy complejo dependiendo de tu objeto, sin embargo tiene las ventajas de que te crea la variable y te trae la informacion
const {nombre, informacion, informacion: {fabricacion, fabricacion:{pais}}} = producto; 

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);