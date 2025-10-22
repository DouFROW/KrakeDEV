

probarFuncion = function () {
    let caracterIngresado = recuperarTexto("lblTexto");
    recorrerCadena(caracterIngresado);
}

probarInvertida = function () {
    let caracterIngresado = recuperarTexto("lblTexto");
    cadenaInvertida(caracterIngresado);
}


recorrerCadena = function (cadena) {
    //0123456
    //Juanito

    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter: " + caracter + " posicion");
    }
}

cadenaInvertida = function (cadena) {
    let invertida="";
    let caracter;
    for (let posicion = cadena.length; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter: " + caracter + " posicion");
        invertida += caracter;
        mostrarTexto("lblInvertida", invertida);
        

    }
}




