
generarNumero = function () {
    let aleatorio = Math.random();
    let numeroMultiplicado = aleatorio * 100;
    let aleatorioRedondeado = parseInt(numeroMultiplicado);
    let numeroAleatorio = aleatorioRedondeado + 1;
    return numeroAleatorio;
}

let aleatorios = [];

generarAleatorios = function () {
    limpiar();
    let numeroIngresado = recuperarTexto("txtNumero");

    if (numeroIngresado < 5 || numeroIngresado > 20) {
        return alert("Debe ingresar un numero entre 5 y 20");
    }

    for (let i = 0; i < numeroIngresado; i++) {
        console.log(i);
        let numeroGenerado = generarNumero();
        guardarNumero(numeroGenerado);
    }
    mostrarResultados(aleatorios);

}

guardarNumero = function (numero) {
    aleatorios.push(numero);
}



mostrarResultados = function (arregloNumeros) {
    let cmpTabla = document.getElementById("lblTabla");
    let contenidoTabla = "<table><tr><th>CABECERA</th><th>CABECERA</th><th>CABECERA</th></tr>";
    let celdas = 3;

    for (let i = 0; i < arregloNumeros.length; i += celdas) {
        contenidoTabla += "<tr>";

        for (let j = 0; j < celdas; j++) {
            let indice = i + j;
            if (indice < arregloNumeros.length) {
                contenidoTabla += "<td>" + arregloNumeros[indice] + "</td>";
            } else {
                contenidoTabla += "<td></td>";
            }
        }

        contenidoTabla += "</tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

limpiar = function () {
    mostrarTexto("lblTabla", "");
    aleatorios = [];
}