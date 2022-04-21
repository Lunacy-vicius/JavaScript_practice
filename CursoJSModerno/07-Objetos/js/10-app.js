//copiar dos objetos
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
    const medidas = {
            peso: "1kg",
            medida:"1m"
}


console.log(producto);
console.log(medidas)


//una forma de unir dos objetos es assign, por ejemplo en una base de datos obtienes un base de datos y un cliente.
//Esto une ambos objetos y lo evalua en resultado.
const resultado = Object.assign(producto, medidas);

//existe otra forma con Spread Operator o Rest Operator

const resultado2 = { ...producto, ...medidas}

console.log(resultado)
console.log(resultado2);