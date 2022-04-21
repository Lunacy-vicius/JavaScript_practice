//Funciones en un objeto

const reproductor = {
    reproducir: function() {
        console.log(`Reproduciendo cancion con el ide ${id}`);
    },
    pausar: function() {
        console.log("Cancion en Pausa")
    },

    borrar: function(id) {
    console.log(`borrando cancion "${id}`)
},

    crearPlaylist: function(nombre){
    console.log(`Creando la playslist de "${id}`)

},
    reproducirPlaylist: function(nombre){
    console.log(`Reproduciendo la playslist de "${id}`)
}
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar();
reproductor.crearPlaylist("Heavy Metal");
reproductor.crearPlaylist("Rock 80s");
reproductor.reproducirPlaylist("Heavy metal")