//El operador && 

const usuario = true;
const puedePagar = true;


//&& sirve para evaluar dos o mas condiciones en el mismo bloque 
if(usuario && puedePagar) {
    console.log("Si puedes comprar")
} else if(!puedePagar && !usuario) {
    console.log("No puedes comprar")
} else if (!usuario) {
    console.log("Inicia sesion o saca una cuenta");
} else if(!puedePagar){
    console.log("Fondos Insuficientes")
}
