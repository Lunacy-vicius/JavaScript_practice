const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.log(meses);
console.table(meses);

//Cuantos elementos tiene el arreglo
console.log(meses.length);
//se utiliza la palabra reservada let en un ciclo debido a que no puedes reasignar un un valor con la palabra reservada const.
for(let i = 0; i < meses.length; i++) {
    console.log( meses[i]);

}