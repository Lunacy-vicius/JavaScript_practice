//

const producto = "Monitor 20 Pulgadas ";
const precio = "300 USD";

//concatenar
console.log(producto.concat(precio));
console.log(producto.concat("En descuento"));

console.log( producto + " Con un precio de " + precio);


//la siguiente sintaxis es dificil de manejar ya que si se olvida un signo + ó , el codigo da error, en ECMASCRIPT 6 esto se soluciona.
console.log("El producto" + producto + "tiene un precio de " + precio );
console.log("El producto" , producto , "tiene un precio de " , precio );

// La nueva sintaxis es mejor 
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);

