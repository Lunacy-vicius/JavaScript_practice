/*//en los iteradores la funcion se ejecuta hasta llegar al final (se deje de cumplir)
//la primera parte es el valor asignado la seunda es la condicion y la tercer parte es el incremento
for (let i = 0; i<10; i++) {
    console.log(`Numero: ${i}`)
}
// En un foor loop como identificas los numeros pares y nones
for (let i = 0; i<=20; i++) {
    if(i % 2 = 0) {
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }

}

//en un for loop como identificas los numeros pares y nones
*/
const carrito = [
    {nombre: "Monitor 7 pulgadas", precio: 500},
    {nombre: "Television", precio: 500},
    {nombre: "Tablet", precio: 500},
    {nombre: "Audifonos", precio: 500},
    {nombre: "Teclado", precio: 500},
    {nombre: "Celular", precio: 500},
]

console.log(carrito.length);
for(let i = 0; i< carrito.length; i++){
console.log(carrito[i].nombre);
}
