
recuperarTexto = function(idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
    }

recuperarFloat = function(idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let precioFloat = parseFloat(valorCaja);
    return precioFloat;
    }

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let cantidadINT = parseInt(valorCaja);
    return cantidadINT;
    } 

recuperarDescuento = function(idComponente){
    let componente = recuperarTexto(idComponente);
    let descuento = parseInt(componente);
    return descuento;
    }

mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

mostrarSubtotal = function(idComponente,valor){
        let componente = document.getElementById(idComponente); 
        componente.innerText = valor;
}

mostrarDescuento = function(idComponente,valor){
        let componente = document.getElementById(idComponente); 
        componente.innerText = valor;
}

mostrarIVA = function(idComponente,valor){
        let componente = document.getElementById(idComponente); 
        componente.innerText = valor+"%";
}

mostrarTotal = function(idComponente,valor){
        let componente = document.getElementById(idComponente); 
        componente.innerText = valor;
}

textoEnCaja = function (idComponente,mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}
subTextos = function(idComponente,mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}



