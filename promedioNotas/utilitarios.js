
recuperarTexto = function(idComponente) {
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
    return valorIngresado;
}   

recuperarEntero = function(idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

mostrarTexto = function(idComponente,mensaje){
    let valorCaja = document.getElementById(idComponente);
    valorCaja.innerText = mensaje;
}

mostrarImagen = function(idComponente,rutaImagen){
    let valorCaja = document.getElementById(idComponente)
    valorCaja.src = rutaImagen;
}

//Limpiar la caja de texto
mostrarTextoEnCaja = function(idComponente,mensaje){
    let valorCaja = document.getElementById(idComponente);
    valorCaja.value = mensaje;
}