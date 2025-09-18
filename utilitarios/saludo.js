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


