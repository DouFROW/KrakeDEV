validarEstructura = function (placa) {
    let Errores = "";
    let caracteresNegados=["Ñ","Á","É","Í","Ó","Ú"];

    if (placa === "") {
        Errores += "Ingrese el numero de placa.";
        return Errores;
    }

    if (placa.length !== 7 && placa.length !== 8) {
        Errores += "Numero de placa invalido";
        return Errores;
    }

    if(caracteresNegados.some(char => placa.includes(char))){
        Errores += "No se aceptan Ñ ni tildes.";
        return Errores;
    }

    if (!validarMayuscula(placa.charAt(0))) {
        Errores += "El primer caracter debe ser mayúscula. \n";
    }

    if (!validarMayuscula(placa.charAt(1))) {
        Errores += "El segundo caracter debe ser mayúscula. \n";
    }

    if (!validarMayuscula(placa.charAt(2))) {
        Errores += "El tercer caracter debe ser mayúscula. \n";
    }

    if (!validarGuion(placa.charAt(3))) {
        Errores += "El cuarto caracter debe ser guion. \n";
    }

    if (!validarDigito(placa.charAt(4))) {
        Errores += "El quinto caracter debe ser digito. \n";
    }

    if (!validarDigito(placa.charAt(5))) {
        Errores += "El sexto caracter debe ser digito. \n";
    }

    if (!validarDigito(placa.charAt(6))) {
        Errores += "El septimo caracter debe ser digito. \n";
    }

    if (placa.length == 8) {
        if (!validarDigito(placa.charAt(7))) {
            Errores += "El octavo caracter debe ser digito. \n";
        }
    }

    if (Errores === "") {
        mostrarTexto("lblErrorPlaca", "");
        return null;

    } else {
        return Errores;
    }

}

obtenerTipoVehiculo = function (placa) {
    let segundaLetra = placa.charAt(1);
    let validacionTipoVehiculo = false;
    let arrayTipos = ["A","Z","E","X","S","M"];

    if (arrayTipos.includes(segundaLetra)) {
        if (["A","Z"].includes(segundaLetra)) {
            validacionTipoVehiculo = true;
            return "Vehiculos comerciales";
        }

        if (segundaLetra.includes("E")) {
            validacionTipoVehiculo = true;
            return "Vehiculos goburnamentales";
        }

        if (segundaLetra.includes("X")) {
            validacionTipoVehiculo = true;
            return "Vehiculos de uso oficial";
        }

        if (segundaLetra.includes("S")) {
            validacionTipoVehiculo = true;
            return "Vehiculos del gobierno provincial";
        }

        if (segundaLetra.includes("M")) {
            validacionTipoVehiculo = true;
            return "Vehiculos municipales";
        }
    } else {
        validacionTipoVehiculo = true;
        return "Vehiculo particular";
    }

    if(validacionTipoVehiculo==false){
        mostrarTexto("lblTipoVehiculo","Tipo de Vehiculo Incorrecto")
        return null;
    }
}

obtenerDiaPicoYPlaca = function(placa){
    let ultimoCaracter = placa.length - 1;
    let valorCaracter = placa.charAt(ultimoCaracter);

    if(valorCaracter == 1 || valorCaracter == 2){
        return "Lunes";
    }

    if(valorCaracter == 3 || valorCaracter == 4){
        return "Martes";
    }

    if(valorCaracter == 5 || valorCaracter == 6){
        return "Miercoles";
    }

    if(valorCaracter == 7 || valorCaracter == 8){
        return "Jueves";
    }

    if(valorCaracter == 9 || valorCaracter == 0){
        return "Viernes";
    }


}


obtenerProvincia = function (placa) {
    let primeraLetra = placa.charAt(0);
    let validacionProvincia = false;

    if (primeraLetra == "A") {
        validacionProvincia = true;
        return "Azuay";
    }

    if (primeraLetra == "B") {
        validacionProvincia = true;
        return "Bolívar";
    }

    if (primeraLetra == "C") {
        validacionProvincia = true;
        return "Carchi";
    }

    if (primeraLetra == "E") {
        validacionProvincia = true;
        return "Esmeraldas";
    }

    if (primeraLetra == "G") {
        validacionProvincia = true;
        return "Guayas";
    }

    if (primeraLetra == "H") {
        validacionProvincia = true;
        return "Chimborazo";
    }

    if (primeraLetra == "I") {
        validacionProvincia = true;
        return "Imbabura";
    }

    if (primeraLetra == "J") {
        validacionProvincia = true;
        return "Santo Domingo de los Tsáchilas";
    }

    if (primeraLetra == "K") {
        validacionProvincia = true;
        return "Sucumbíos";
    }

    if (primeraLetra == "L") {
        validacionProvincia = true;
        return "Loja";
    }

    if (primeraLetra == "M") {
        validacionProvincia = true;
        return "Manabí";
    }

    if (primeraLetra == "N") {
        validacionProvincia = true;
        return "Napo";
    }

    if (primeraLetra == "O") {
        validacionProvincia = true;
        return "El Oro";
    }

    if (primeraLetra == "P") {
        validacionProvincia = true;
        return "Pichincha";
    }

    if (primeraLetra == "Q") {
        validacionProvincia = true;
        return "Orellana";
    }

    if (primeraLetra == "R") {
        validacionProvincia = true;
        return "Los Ríos";
    }

    if (primeraLetra == "S") {
        validacionProvincia = true;
        return "Pastaza";
    }

    if (primeraLetra == "T") {
        validacionProvincia = true;
        return "Tungurahua";
    }

    if (primeraLetra == "U") {
        validacionProvincia = true;
        return "Cañar";
    }

    if (primeraLetra == "V") {
        validacionProvincia = true;
        return "Morona Santiago";
    }

    if (primeraLetra == "W") {
        validacionProvincia = true;
        return "Galápagos";
    }

    if (primeraLetra == "X") {
        validacionProvincia = true;
        return "Cotopaxi";
    }

    if (primeraLetra == "Y") {
        validacionProvincia = true;
        return "Santa Elena";
    }

    if (primeraLetra == "Z") {
        validacionProvincia = true;
        return "Zamora Chinchipe";
    }

    if (validacionProvincia == false) {
        mostrarTexto("lblProvincia", "Provincia Incorrecta");
        return null
    }
}

