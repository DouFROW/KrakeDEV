let lanzamientos = 5;
let puntos = 0;


jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);

    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();

    
}

modificarPuntos = function(numero){
    puntos = puntos + numero;
    cambiarTexto("lblPuntaje",puntos);
    if(puntos>20){
        cambiarTexto("lblResultado","¡¡GANASTE!!");
    }
    
}

modificarLanzamientos = function(){
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    if(lanzamientos==0 && puntos<20){
       cambiarTexto("lblResultado","GAME OVER");
    }else if(lanzamientos<0){
        limpiar();
    }
    
}

limpiar = function(){
    lanzamientos = 5;
    puntos = 0;
    cambiarTexto("lblResultado","")
    cambiarTexto("lblPuntaje","0");
    cambiarTexto("lblLanzamientos","5");
    cambiarImagen("imgDado","");

}


mostrarCara = function(numeroCara){
    if(numeroCara==1){//Con == se compara y con = se asigna
        cambiarImagen("imgDado","dados1.png")
    }else if(numeroCara==2){
        cambiarImagen("imgDado","dados2.png")
    }else if(numeroCara==3){
        cambiarImagen("imgDado","dados3.png")
    }else if(numeroCara==4){
        cambiarImagen("imgDado","dados4.png")
    }else if(numeroCara==5){
        cambiarImagen("imgDado","dados5.png")
    }else if(numeroCara==6){
        cambiarImagen("imgDado","dados6.png")
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}