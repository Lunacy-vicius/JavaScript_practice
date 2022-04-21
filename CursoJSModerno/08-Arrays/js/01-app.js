//Creacion de ARRAYS
//Los arreglos sirven para agrupar elemenotos del mismo tipo. La diferencia con los objetos es que los objetos son variables que agrupan informacion de un elemento de un objeto un arreglo puede tener multiples elementos. 

const numeros = [10, 20, 30];

//la siguiente sintaxis no es tan comun para la creacion de arreglos pero es bueno identificarla 
const meses = new Array("Enero", "Febrero", "Marzo");
console.log(numeros);
console.log(meses);


//Arreglos que contienen multiples datos, incluso pueden contener a otro arreglo

const todo = ["Hola", 10, true, "si", null, {nombre: "Ricardo", trabajo: "Quimico"}, [1,2,3]];

console.log(todo);