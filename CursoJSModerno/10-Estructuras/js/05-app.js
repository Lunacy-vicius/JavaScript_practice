//swithc para evaluar multiples condiciones

//Mayor o igual y else if 

const metodoPago = "efectivo";
const dinero = 1000;
const totalAPagar = 500;
const tarjeta = true;


//
switch(metodoPago) {
    case "efectivo":
        Pagar();
        break;
    case "cheque":
         console.log(`Pagaste con ${metodoPago}`);
        break;
    case "tarjeta":
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default: 
        console.log("metodo de pago no soportado");
        break;
}

if(dinero >= totalAPagar) {
    console.log("Si podemos pagar")
} else if(tarjeta) {
    console.log("si puede pagar con fondos de tarjeta")
} else {
    console.log ("fondos insuficientes")
}