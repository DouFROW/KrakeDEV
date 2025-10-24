//Variable global, solo se modifica no se crea de nueva al entrar a la funcion
let notas = [];


agregarElementos = function () {
    //let notas = []; Variable local cada vez que entra se crea una variable nueva
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo = function () {
    let notasRec;

    for (let indice = 0; indice < notas.length; indice++) {
        notasRec = notas[indice];
        console.log(notasRec);
    }
    //console.log(notasRec)
}

probarAgregar = function () {
    let notaIngresada = recuperarInt("txtNota");
    agregarNotas(notaIngresada);
}


agregarNotas = function (nota) {
    notas.push(nota);
    console.log(notas);
    mostrarTextoEnCaja("txtNota", "");
    mostrarTexto("lblNotas", notas);
    mostrarNotas();
}

ejecutarPromedio = function () {
    let promedioTotal = calcularPromedio();
    mostrarTexto("lblPromedio", promedioTotal);
}

calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio;

    for (let indice = 0; indice < notas.length; indice++) {
        sumaNotas += notas[indice];
    }
    mostrarTexto("lblSumaNotas", sumaNotas);
    promedio = sumaNotas / notas.length;
    return promedio.toFixed(2);
}

generarTabla = function () {
    let contenidoTabla = "";
    let cmpTable = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>1</td></tr>" +
        "<tr><td>2</td></tr></table>";
    cmpTable.innerHTML = contenidoTabla;
}

mostrarNotas = function(){
    let cmpTable = document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTA</th></tr>";
    let miNota;

    for(let i=0; i<notas.length; i++){
        miNota = notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr></d>";
    }
    contenidoTabla += "</table>";
    cmpTable.innerHTML=contenidoTabla;
}

limpiar = function () {
    mostrarTexto("lblNotas", "");
    mostrarTexto("lblSumaNotas", "");
    mostrarTexto("lblPromedio", "");
    mostrarTexto("divTabla","")
    notas = [];
}

