//Mayor o igual y else if 

const dinero = 1000;
const totalAPagar = 500;
const tarjeta = true;


//si mi primera condicion se cumple, no es necesario ejecutar las siguientes condiciones, por lo cual javaScript no lo ejecuta.
//else siempre sera mi condicion de menos importancia o de bajo nivel y por lo tanto la ultima.
//puedes agregar cuantos if else requieras, sin embargo trata de evitar el codigo spaguetti. para eso se utiliza switch
if(dinero >= totalAPagar) {
    console.log("Si podemos pagar")
} else if(tarjeta) {
    console.log("si puede pagar con fondos de tarjeta")
} else {
    console.log ("fondos insuficientes")
}