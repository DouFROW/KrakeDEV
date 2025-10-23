//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";
let intentos = 0;
let coincidencias = 0;
let errores = 0;

guardarPalabra = function () {
    let caracteres = recuperarTexto("txtSecreta");

    if (caracteres.length < 5 || caracteres.length > 5) {
        alert("Debe ingresar 5 caracteres.");
    } else {
        for (let posicion = 0; posicion < caracteres.length; posicion++) {
            let vlCaracter = caracteres.charAt(posicion);

            if (!esMayuscula(vlCaracter)) {
                return alert("Todos los caracteres deben ser mayusculas.");
            }
        }
        palabraSecreta = caracteres;
        alert("GUARDADO");
        limpiar();
        console.log(palabraSecreta);
    }
}

ingresarLetra = function () {
    let letra = recuperarTexto("txtLetra");

    if (palabraSecreta == "") {
        return alert("Debe ingresar una palabra");
    }

    if (letra.length < 1 || letra.length > 1) {
        return alert("Debe ingresar una letra.");
    }

    if (!esMayuscula(letra)) {
        return alert("Todos los caracteres deben ser mayusculas.");
    }

    if (esMayuscula(letra)) {
        intentos++;
        validar(letra);
        if (intentos == 10) {
            mostrarTextoEnCaja("txtLetra", "");
            return mostrarImagen("ahorcadoImagen", "gameOver.gif");
        }
        if (coincidencias == 5) {
            mostrarTextoEnCaja("txtLetra", "");
            return mostrarImagen("ahorcadoImagen", "ganador.gif");
            
        }
        
    }


    mostrarTextoEnCaja("txtLetra", "");


}

mostrarLetra = function (letra, posicion) {
    if (posicion == 0) {
        mostrarTexto("div0", letra);
    }
    if (posicion == 1) {
        mostrarTexto("div1", letra);
    }
    if (posicion == 2) {
        mostrarTexto("div2", letra);
    }
    if (posicion == 3) {
        mostrarTexto("div3", letra);
    }
    if (posicion == 4) {
        mostrarTexto("div4", letra);
    }
}

validar = function (letra) {
    let letrasEncontradas = 0;
    for (let posicion = 0; posicion < palabraSecreta.length; posicion++) {
        let vlCaracter = palabraSecreta.charAt(posicion);
        if (vlCaracter == letra) {
            mostrarLetra(letra, posicion);
            letrasEncontradas++;
            coincidencias++;
        }
    }
    if (letrasEncontradas == 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA")
        errores++;
        mostrarAhorcado();
    }
}

mostrarAhorcado = function () {
    for (let i = 0; i <= errores; i++) {

        let ruta = "Ahorcado_0" + i + ".png";
        mostrarImagen("ahorcadoImagen", ruta);

    }
}

esMayuscula = function (caracter) {
    let caracterASCII = caracter.charCodeAt();

    if (caracterASCII >= 65 && caracterASCII <= 90) {
        return true;
    } else if (caracterASCII == 209 || caracterASCII == 193 || caracterASCII == 201 || caracterASCII == 205 || caracterASCII == 211 || caracterASCII == 218) {
        return true;
    }

    if (caracterASCII < 65 || caracterASCII > 90) {
        return false;
    }

}

limpiar = function(){
    intentos = 0;
    coincidencias = 0;
    errores = 0;
    mostrarTextoEnCaja("txtSecreta", "");
    mostrarTexto("div0","");
    mostrarTexto("div1","");
    mostrarTexto("div2","");
    mostrarTexto("div3","");
    mostrarTexto("div4","");
    mostrarImagen("ahorcadoImagen", "");
}



