//Object. keys, .values y .entries


const producto = {
    nombre:"monitor de 20 pulgadas", 
    precio: 300,
    disponible: true
}

//.keys sirve para retornar un arreglo con los keys del objeto, por ejemplo puedes obtener datos de un arreglo en una base de datos. te retorna las variables si es que las hay

console.log(Object.keys(producto));

//values te retorna los valores de las variables
console.log(Object.values(producto));

//entries te retorna todo
console.log(Object.entries(producto));