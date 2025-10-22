//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
validar = function(){
    let caracteres = recuperarTexto("txtSecreta");
    esMayuscula(caracteres);
}


esMayuscula = function(caracter){
    let caracterASCII = caracter.charCodeAt(0);

    if(caracterASCII>=65 && caracterASCII<=90){
        return true;
    }else if(caracterASCII==165||caracterASCII==181||caracterASCII==144||caracterASCII==214||caracterASCII==224||caracterASCII==233){
        return true;
    }

    if(caracterASCII<65 && caracterASCII>90){
        return false;
    }
}