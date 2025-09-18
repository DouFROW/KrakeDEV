saludar = function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarEntero("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenida = "Hola "+nombre+" "+apellido+", tu edad es "+edad+", y tu estatura "+estatura

    mostrarTexto("lblResultado",mensajeBienvenida);
    mostrarImagen("lblImagen","img/saluda.gif") //para referenciar algun componente no es necesario poner ./ para especificar el directorio actual ya que el programa lo asume por si solo.
    
    mostrarTextoEnCaja("txtNombre","");
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

mostrarImagen = function(idComponente,rutaImagen){
    let valorCaja = document.getElementById(idComponente)
    valorCaja.src = rutaImagen;
}

//Limpiar la caja de texto
mostrarTextoEnCaja = function(idComponente,mensaje){
    let valorCaja = document.getElementById(idComponente);
    valorCaja.value = mensaje;
}

