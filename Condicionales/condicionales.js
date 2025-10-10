Interes = function(){
    let interes = calcularTasaInteres("txtIngresoAnuales");
    cambiarTexto("lblTasaDeInteres",interes+"%");

}

capacidadPago = function(){
    let capPagos = calcularCapacidadPagos("txtEdad","txtIngresos","txtEgresos");
    cambiarTexto("lblCapacidadDePago",capPagos+"$");
}

descuento  = function(){
    let descuento = calcularDescuento("txtPrecio","txtCantidad");
    cambiarTexto("lblDescuento",descuento+"$");
}

colesterol = function(){
    let detColesterol = determinarColesterolLDL("txtColesterol");
    cambiarTexto("lblNivelColesterol",detColesterol);
}

clave = function(){
    let valClave = validarClave("txtClave");
    cambiarTexto("lblClave",valClave);
}

mayuscula = function(){
    let esMayus = esMayuscula("txtMayus");
    cambiarTexto("lblMayus",esMayus);
}

minusculas = function(){
    let esMinus = esMinuscula("txtMinus");
    cambiarTexto("lblMinus",esMinus);
}

digito = function(){
    let digito = esDigito("txtDigito");
    cambiarTexto("lblDigito",digito);
}

permiso = function(){
    let dPermiso = darPermiso("txtMatematica","txtFisica","txtGeometria");
    cambiarTexto("lblNotas",dPermiso);
}

otorPermiso = function(){
    let otoPermi = otorgarPermiso("txtMatematica","txtFisica","txtGeometria");
    cambiarTexto("lblPermiso",otoPermi);
}

salir = function(){
    let dSalir = dejarSalir("txtMatematica","txtFisica","txtGeometria");
    cambiarTexto("lblSalir",dSalir);
} 


calcularTasaInteres = function(ingresoAnual){
    let cmpIngreso = recuperarFlotante(ingresoAnual);
    let tasaDeInteres = 16;
    if(cmpIngreso<300000 ){
        return tasaDeInteres;
    }else if(cmpIngreso>=300000 && cmpIngreso<500000){
        tasaDeInteres--;
        return tasaDeInteres;
    }else if(cmpIngreso>=500000 && cmpIngreso<1000000){
        tasaDeInteres = tasaDeInteres-2;
        return tasaDeInteres;
    }else if(cmpIngreso>=1000000 && cmpIngreso<2000000){
        tasaDeInteres = tasaDeInteres - 3;
        return tasaDeInteres;
    }else if(cmpIngreso>=2000000){
        tasaDeInteres = tasaDeInteres - 4;
        return tasaDeInteres;
    }
}

calcularCapacidadPagos = function(edad,ingresos,egresos){
    let vlEdad = recuperarEntero(edad);
    let vlIngresos = recuperarFlotante(ingresos);
    let vlEgresos = recuperarFlotante(egresos);
    let capacidadDePago;
    
    if(vlEdad>50){
        resta = vlIngresos - vlEgresos;
        capacidadDePago = resta * 0.30;
        return capacidadDePago;
    }else if(vlEdad<=50){
        resta = vlIngresos - vlEgresos;
        capacidadDePago = resta * 0.40;
        return capacidadDePago;
    }
}

calcularDescuento = function(precio,cantidad){
    let vlPrecio = recuperarFlotante(precio);   
    let vlCantidad = recuperarEntero(cantidad);
    let vlSubTotal = vlPrecio * vlCantidad;
    let vlDescuento;
    let descuentoApli;

    if(vlCantidad<3){
       let mensaje = "No recibe descuento";
       return mensaje;
    }else if(vlCantidad>=3 && vlCantidad<=5){
        vlDescuento = vlSubTotal * 0.02;
        descuentoApli = vlSubTotal - vlDescuento;
        return descuentoApli;
    }else if(vlCantidad>=6 && vlCantidad<=11){
        vlDescuento = vlSubTotal * 0.03;
        descuentoApli = vlSubTotal - vlDescuento;
        return descuentoApli;
    }else if(vlCantidad>=12){
        vlDescuento = vlSubTotal * 0.04;
        descuentoApli = vlSubTotal - vlDescuento;
        return descuentoApli;
    }
}

determinarColesterolLDL = function(nivelColesterol){
    let nlColesterol = recuperarFlotante(nivelColesterol);

    if(nlColesterol<100){
        return "Óptimo (menos de 100 mg/dL)";
    }else if(nlColesterol>=100 && nlColesterol<=129){
        return "Casi óptimo / por encima de lo óptimo (100-129 mg/dL)";
    }else if(nlColesterol>=130 && nlColesterol<=159){
        return "Límite alto (130-159 mg/dL)";
    }else if(nlColesterol>=160 && nlColesterol<=189){
        return "Alto (160-189 mg/dL)";
    }else{
        return "Muy alto (190 mg/dL o más)";
    }
}

validarClave = function(clave){
    let vlClave = recuperarTexto(clave);
    let tamanioClave = vlClave.length; 
    if(tamanioClave>=8 && tamanioClave<=16){
        return true;
    }else{
        return false;
    }
}

esMayuscula = function(caracter){
    let vlCaracter = recuperarTexto(caracter);
    let vlASCII = vlCaracter.charCodeAt(0);

    if(vlASCII>=65 && vlASCII<=90){
        return true;
    }else{
        return false;
    }
}

esMinuscula = function(caracter){
    let vlCaracter = recuperarTexto(caracter);
    let vlASCII = vlCaracter.charCodeAt(0);
    const minusculasConTilde = ["á", "é", "í", "ó", "ú", "ñ", "ü"];

    if(vlASCII>=97 && vlASCII<=122){
        return true;
    }else if(minusculasConTilde.includes(vlCaracter)){
        return true;
    }else{
        return false;
    }
}

esDigito = function(caracter){
    let vlCaracter = recuperarTexto(caracter);
    let vlASCII = vlCaracter.charCodeAt(0);
    if(vlASCII>=48 && vlASCII<=57){
        return true;
    }else{
        return false;
    }
}

darPermiso = function(notaMatematica,notaFisica,notaGeometria){
    let vlMatematica = recuperarFlotante(notaMatematica);
    let vlFisica = recuperarFlotante(notaFisica);
    let vlGeometria = recuperarFlotante(notaGeometria);

    if(vlMatematica>90 || vlFisica>90 || vlGeometria>90){
        return true;
    }else{
        return false;
    }
}


otorgarPermiso = function(notaMatematica,notaFisica,notaGeometria){
    let vlMatematica = recuperarFlotante(notaMatematica);
    let vlFisica = recuperarFlotante(notaFisica);
    let vlGeometria = recuperarFlotante(notaGeometria);

    if((vlMatematica>90 || vlFisica>90) && vlGeometria>80){
        return true;
    }else{
        return false;
    }
}

dejarSalir = function(notaMatematica,notaFisica,notaGeometria){
    let vlMatematica = recuperarFlotante(notaMatematica);
    let vlFisica = recuperarFlotante(notaFisica);
    let vlGeometria = recuperarFlotante(notaGeometria);

    if((vlMatematica>90 || vlFisica>90 || vlGeometria>90) && vlFisica>vlMatematica){
        return true;
    }else{
        return false;
    }
}