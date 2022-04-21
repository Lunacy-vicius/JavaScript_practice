//Como se comunican las funciones 
iniciarApp();



function iniciarApp() {
    console.log("Iniciando app...");
    segundaFunciones();
}



function segundaFunciones(){
    console.log("Desde la segunda funcion");
    usuaruiAutenticado("Ricardo")
}

function usuaruiAutenticado(usuario) {
    console.log("Auntenticando usuario ... Espere...");
    console.log(`Usuario autenticado correctamente: ${usuario}`);
}
