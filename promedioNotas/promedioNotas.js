calcularPromedioNotas = function(){
    let n1 = recuperarFloat("txtNota1");
    let n2 = recuperarFloat("txtNota2");
    let n3 = recuperarFloat("txtNota3");
    let promedio = calcularPromedio(n1,n2,n3);
    let promTotal = promedio.toFixed(2);
    
    mostrarTexto("lblResultado",promTotal);
    if(promTotal>0 && promTotal<5){
        mostrarTexto("lblTexto","REPROBADO");
        mostrarImagen("imagen","fracaso.gif");
    }else if(promTotal>=5 && promTotal<=8){
        mostrarTexto("lblTexto","BUEN TRABAJO");
        mostrarImagen("imagen","goodjob.gif");
    }else if(promTotal>8 && promTotal<=10){
        mostrarTexto("lblTexto","EXCELENTE");
        mostrarImagen("imagen","excelente.gif");
    }else{
        mostrarTexto("lblTexto","DATOS INCORRECTOS");
        mostrarImagen("imagen","error.gif");
    }
}
