

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

validarGuion = function (guion) {
    let valorGuion = guion.charCodeAt();
    let ValidacionGuion;

    if (valorGuion == 45) {
        ValidacionGuion = true;
    }
    if (valorGuion < 45 || valorGuion > 45) {
        ValidacionGuion = false;
    }
    return ValidacionGuion;
}

