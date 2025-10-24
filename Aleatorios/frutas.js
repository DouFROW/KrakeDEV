let frutas = ["Manzana","Pera","Banana","Fresa"];

probarBusqueda = function(){
    let fruta = recuperarTexto("txtFruta")
    let resultado = buscar(fruta);
    
    if(resultado==null){
        alert("No existe la fruta")
    }else{
        alert(resultado+" existe en el cesto!!")
    }
}


buscar = function(fruta){
    let elemento;
    let frutaEncontrada = null;
    for(let i=0; i<frutas.length; i++){
        elemento=frutas[i];
        if(fruta == elemento){
            frutaEncontrada = elemento;
            break;
        }
    }
    return frutaEncontrada;
}