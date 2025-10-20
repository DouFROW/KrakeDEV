validarPlaca = function () {
    let placaIngresada = recuperarTexto("lblPlaca");
    let erroresEstructura = validarEstructura(placaIngresada);

    if (erroresEstructura == null) {
        mostrarTexto("lblTituloError", "");
        mostrarTexto("listErrores","");
        mostrarTexto("lblValidacion", "ESTRUCTURA VALIDA");
        
        let provincia = obtenerProvincia(placaIngresada);
        let tipoVehiculo = obtenerTipoVehiculo(placaIngresada);
        let diaPicoYPlaca = obtenerDiaPicoYPlaca(placaIngresada);

        if(provincia !== null){
            mostrarTexto("lblProvincia", provincia);
        }

        if(tipoVehiculo !== null){
            mostrarTexto("lblTipoVehiculo", tipoVehiculo);
        }

        if(diaPicoYPlaca !== null){
            mostrarTexto("lblPicoPlaca",diaPicoYPlaca);
        }

    } else if(erroresEstructura.length<28){
        mostrarTexto("lblTituloError", "¡ERROR!");
        mostrarTexto("lblErrorPlaca", erroresEstructura);
        mostrarTexto("lblValidacion", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblProvincia","");
        mostrarTexto("lblTipoVehiculo", "");
        mostrarTexto("lblPicoPlaca", "");
        mostrarTexto("listErrores","");
    }else{
        mostrarTexto("lblTituloError", "¡ERROR!");
        mostrarTexto("listErrores", erroresEstructura);
        mostrarTexto("lblValidacion", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblProvincia","");
        mostrarTexto("lblTipoVehiculo", "");
        mostrarTexto("lblPicoPlaca", "");
        mostrarTexto("lblErrorPlaca","");
    }
}

limpiar = function () {
    mostrarTextoEnCaja("lblPlaca","");
    mostrarTexto("lblTituloError", "");
    mostrarTexto("lblErrorPlaca", "");
    mostrarTexto("listErrores","");
    mostrarTexto("lblValidacion", "");

    mostrarTexto("lblProvincia","");
    mostrarTexto("lblTipoVehiculo","");
    mostrarTexto("lblPicoPlaca", "");
}