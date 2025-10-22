

probarFuncion = function () {
    let caracterIngresado = recuperarTexto("lblTexto");
    recorrerCadena(caracterIngresado);
    contarLetras(caracterIngresado);
}

probarInvertida = function () {
    let caracterIngresado = recuperarTexto("lblTexto");
    cadenaInvertida(caracterIngresado);
    contarLetras(caracterIngresado);
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

buscarLetra = function(cadena,letra){
    let letraIterada;
    let existeLetra=false;
    for(let i=0; i<=cadena.length; i++){
        letraIterada=cadena.charAt(i);
        if(letraIterada==letra){
            existeLetra=true;
        }
    }

    if(existeLetra==true){
        console.log("Existe");
        return true;
    }else{
        console.log("No existe");
        return false;
    }
}

contarLetras = function(cadena){
    let letra;
    let contador=0;

    for(let i=0; i<cadena.length; i++){
        letra=cadena.charAt(i);
        if(validarMayuscula(letra)==true){
            contador++;
        }
        
    }

    console.log("En la cadena hay "+contador+" Mayusculas");
    mostrarTexto("lblContador","En la cadena hay "+contador+" Mayusculas");
}




