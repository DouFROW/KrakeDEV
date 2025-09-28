jugar = function(){
    let numeroAleatorio = lanzarDado();
    cambiarTexto("lblNumero",numeroAleatorio);
    if(numeroAleatorio>3){
        let mensaje = "Es mayor a 3 - GANASTE";
        cambiarTexto("lblMensaje",mensaje)
    }else{
        let mensaje = ("Es menor a 3 - ESTAS DE MALAS");
        cambiarTexto("lblMensaje",mensaje)
    }
}

//Crear funcion lanzarDado

lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();//Entre 0 y 1
    numeroMultiplicado = aleatorio*6;//Entre 0 y 6 (excluido)
    numeroEntero = parseInt(numeroMultiplicado);
    valorDado = numeroEntero + 1;//Se suma uno para llegar a 6 y evitar el 0
    return valorDado;
}


