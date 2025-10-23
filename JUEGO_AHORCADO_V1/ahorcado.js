//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

guardarPalabra = function () {
    let caracteres = recuperarTexto("txtSecreta");

    if (caracteres.length < 5 || caracteres.length > 5) {
        alert("Debe ingresar 5 caracteres.");
    } else {
        for (let posicion = 0; posicion < caracteres.length; posicion++) {
            let vlCaracter = caracteres.charAt(posicion);

            if(!esMayuscula(vlCaracter)){
                return alert("Todos los caracteres deben ser mayusculas.");
            }
        }
        palabraSecreta = caracteres;
        console.log(palabraSecreta);
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



