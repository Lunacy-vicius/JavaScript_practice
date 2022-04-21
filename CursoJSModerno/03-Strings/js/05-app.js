const producto = "Monitor 20 pulgadas";

console.log(producto);
console.log(producto.replace("pulgadas", ""));
console.log(producto.replace("monitr", "Monitor curvo"));

// .slice para cortar
console.log(producto.slice(0, 10) );
console.log(producto.slice(8) );
console.log(producto.slice(2, 1) );

//alernativa a slice
console.log(producto.substring(0,10));
console.log(prodcuto.substring(2,1));


const usuario = "Ricardo";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
