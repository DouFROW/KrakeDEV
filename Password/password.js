ejecutarValidacion = function () {
    let contraseña = recuperarTexto("lblContraseña");
    let validacion = validarPassword(contraseña);
    mostrarTexto("lblErrores", validacion);
}

validarPassword = function (password) {
    let passwordValdia = false;
    let Errores = "";
    let CaracterEspecial = ["*", "-", "_"];
    let contador;
    let contadorMayuscula = 0;
    let contadorDigito = 0;
    let contadorEspecial = 0;

    if (password === "") {
        return Errores += "Ingrese una contraseña";
    }

    if (password.length >= 8 && password.length <= 16) {
        
        for (let posicion = 0; posicion <= password.length; posicion++) {
            caracter = password.charAt(posicion);

            if (validarMayuscula(caracter) == true) {
                contadorMayuscula++;
            }

            if (validarDigito(caracter) == true) {
                contadorDigito++;
            }

            if (CaracterEspecial.includes(caracter)) {
                contadorEspecial++;
            }
        }

        if (contadorMayuscula == 0) {
            Errores += "Debe ingresar por lo menos una Mayuscula \n";
        }
        if (contadorDigito == 0) {
            Errores += "Debe ingresar por lo menos un Digito \n";
        }
        if (contadorEspecial == 0) {
            Errores += "Debe ingresar por lo menos un caracter especial ( *, - , _ ) \n";
        } 

        if(Errores === ""){
            return "";
        }else{
            return Errores;
        }
    }else{
        return Errores += "De 8 a 16 caracteres permitidos";
    }
}
