//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

guardarPalabra = function () {
    let caracteres = recuperarTexto("txtSecreta");
    let letra = recuperarTexto("txtLetra");

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
        mostrarTextoEnCaja("txtSecreta","");
        console.log(palabraSecreta);
    }
}

mostrarLetra = function(letra,posicion){
    if(posicion==0){
        mostrarTexto("div0",letra);
    }
    if(posicion==1){
        mostrarTexto("div1",letra);
    }
    if(posicion==2){
        mostrarTexto("div2",letra);
    }
    if(posicion==3){
        mostrarTexto("div3",letra);
    }
    if(posicion==4){
        mostrarTexto("div4",letra);
    }
}

validar = function(letra){
    let letrasEncontradas;
    for(let posicion=0; posicion<palabraSecreta.length; posicion++){
        let vlCaracter = palabraSecreta.charAt(posicion);
        if(vlCaracter == letra){
            mostrarLetra(letra,posicion);
            letrasEncontradas++;
        }
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



