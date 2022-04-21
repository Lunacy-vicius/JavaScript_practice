//Inicializar una variable con un valor la sintaxis vieja utiliza la palabra reservada "var" pero su uso se esta deprecando ya que es lo mismo poner solo la variable sin especificarla con la palabra var.
var producto = "Monitor de 24 Pulgadas";
console.log(producto);
//las variables se pueden seasignar 

producto = "Monitor de 19 Pulgadas";
console.log(producto);

//Javascript es un lenguaje de tipo dinamico, no se especifican los tipos de datos, en ese caso tenemos a Typescript.
producto = 20;
console.log(producto);

// Se pueden inicializan sin valor y asignarlo después
var disponible;
disponible = true;

disponible = false;

//Inicializar multiples variables.
var categoria = "Computadoras",
    marca = "Marca Famosa",
    calificacion = 5;

//Las variables no pueden iniciar con  numeros en JavaScript.
/*var 01_;
var 9;*/