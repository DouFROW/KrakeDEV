calcularPromedioNotas = function(){
    let n1 = recuperarFloat("txtNota1");
    let n2 = recuperarFloat("txtNota2");
    let n3 = recuperarFloat("txtNota3");
    let promedio = calcularPromedio(n1,n2,n3);
    let promTotal = promedio.toFixed(2);
    
    mostrarTexto("lblResultado",promTotal);
}
