
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

validarMayuscula = function (caracter) {
    let ValorASCII = caracter.charCodeAt();
    let ValidacionMayus;

    if (ValorASCII >= 65 && ValorASCII <= 90) {
        ValidacionMayus = true;
    }

    if (ValorASCII < 65 || ValorASCII > 90) {
        ValidacionMayus = false;
    }

    if (ValorASCII == 209 || ValorASCII == 193 || ValorASCII == 201 || ValorASCII == 205 || ValorASCII == 211 || ValorASCII == 218) {
        return null;
    }

    return ValidacionMayus;
}

validarDigito = function (digito) {
    let valorDigito = digito.charCodeAt();
    let ValidacionDigito;

    if (valorDigito >= 48 && valorDigito <= 57) {
        ValidacionDigito = true;
    }
    if (valorDigito < 48 || valorDigito > 57) {
        ValidacionDigito = false;
    }
    return ValidacionDigito;

}


