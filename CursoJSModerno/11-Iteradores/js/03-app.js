//reto del fizz buzz
//supongamos que tenemos una serie de elementos del 0 al 100 todos los que son multiplos de tres, es decir, 3, 6, 9, 12, 15 deben imprimir en la consola la palabra fizz todos los que son multiplos de 5 es decir 5, 10, 15, 20, deben imprimir en la consola la palabra bus y los que son multiplos de ambos deben de imprimir fizzbuzz

//primero se pone la condicion menos comun o mas dificil

for(let i = 1; i <100; i++ ) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZ BUZZ!!`)
    } else if ( i % 3 === 0) {
        console.log(`${i} Fizz`)
    } else if (i % 5 === 0){
        console.log(`${i} Buzz`)
    }
}