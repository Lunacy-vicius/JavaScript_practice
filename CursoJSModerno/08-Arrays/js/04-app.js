//agregar nuevos valores a un array
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
meses[0] = "Nuevo mes";
meses[7] = "Ultimo mes";
//si pusieramos una posicion "11" JavaScript lo interpretaria y no crearia mas elementos como lo hacen otros lenguajes simplemente se salta a esa posicion.
console.table(meses);