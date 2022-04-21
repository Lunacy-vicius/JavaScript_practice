const producto = '             Monitor 20 pulgadas       ';
console.log(producto);
console.log(producto.length);


//Eliminar del inicio Espacios en blanco y solo insertar datos reales.
console.log(producto.trimStart()   );
console.log(producto.trimEnd()   );
// Lo podemos dejar en una sola linea
console.log (producto.trimStart().trimEnd() )
// o bien 
console.log ( producto.trim() )