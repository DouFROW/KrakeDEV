obtenerAleatorio = function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorJuego;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*3;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorJuego=aleatorioEntero+1;
    return valorJuego;
}
    
generarElemento = function(){
    let aleatorio = obtenerAleatorio();
    if(aleatorio==1){
        return "piedra";
    }

    if(aleatorio==2){
        return "papel";
    }

    if(aleatorio==3){
        return "tijera";
    }
}

determinarGanador = function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1=="piedra" && eleccionJugador2=="tijera"){
        return 1;
    }else if(eleccionJugador1=="tijera" && eleccionJugador2=="piedra"){
        return 2;
    }

    if(eleccionJugador1=="piedra" && eleccionJugador2=="papel"){
        return 2;
    }else if(eleccionJugador1=="papel" && eleccionJugador2=="piedra"){
        return 1;
    }

    if(eleccionJugador1=="papel" && eleccionJugador2=="tijera"){
        return 2;
    }else if(eleccionJugador1=="tijera" && eleccionJugador2=="papel"){
        return 1;
    }

    if(eleccionJugador1==eleccionJugador2){
        return 0;
    }
}

generarRuta = function(nombre){
    let ruta = "image/"+nombre+".png";
    mostrarImagen("lblImagenGenerada",ruta);
}