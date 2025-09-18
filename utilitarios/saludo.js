saludar = function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarEntero("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenida = "Hola "+nombre+" "+apellido+", tu edad es "+edad+", y tu estatura "+estatura

    mostrarTexto("lblResultado",mensajeBienvenida);
}

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

