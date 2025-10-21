let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function (seleccionado) {
    if (puntosUsuario == 5) {
        return mostrarTexto("lblResultado", "GANASTE EL JUEGO :)");

    }
    if (puntosComputador == 5) {
        return mostrarTexto("lblResultado", "El COMPUTADOR TE HA VENCIDO :(");

    }

    if (puntosComputador < 5 && puntosComputador < 5) {
        let generado = generarElemento()
        generarRuta(generado);
        let ganador = determinarGanador(seleccionado, generado);


        if (ganador == 0) {
            mostrarTexto("lblResultado", "EMPATE")
        } else if (ganador == 1) {
            mostrarTexto("lblResultado", "¡¡GANASTE LA PARTIDA!!")
            puntosUsuario += 1;
            mostrarTexto("lblUsuario", puntosUsuario);
        } else {
            mostrarTexto("lblResultado", "PERDISTE LA PARTIA!!")
            puntosComputador += 1;
            mostrarTexto("lblComputadora", puntosComputador);
        }
    }
}

nuevaPartida = function(){
    puntosUsuario = 0;
    puntosComputador = 0;
    mostrarTexto("lblResultado", "");
    mostrarTexto("lblUsuario", "");
    mostrarTexto("lblComputadora", "");
    mostrarImagen("lblImagenGenerada","");

}