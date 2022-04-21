// Acceder a los valores de un array

const numeros = [10, 20, 30, 40, 50, [1,2,3]];

console.log(numeros);
console.table(numeros);

//acceder al arreglo
//si se trata de acceder a una posicion que no existe el resultado sera undefined.
//se puede accerder a arreglos dentro de otros arreglos.
console.log(numeros[2]);
console.log(numeros[0]);
console.log(numeros[0][1]);

