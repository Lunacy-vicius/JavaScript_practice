//Arrow functions en el reproductor de musica 
const reproductor = {
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () =>console.log("pausando..."),
    borrar: id => console.log(`Borrando cancion ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist con nombre ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),
    
    set nuevaCancon(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo cancion{this.cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Heavy Metal");
reproductor.crearPlaylist("Rock 80s");
reproductor.reproducirPlaylist("Heavy metal")