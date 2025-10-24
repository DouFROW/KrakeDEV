probarAtributos = function(){
    let persona = {
        nombre : "Douglas",
        apellido : "Cornejo",
        edad : 17,
        estaVivo : true    
    }

    console.log(persona.nombre);
    console.log(persona.edad);

    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("esta vivo");
    }
}

crearProducto = function(){
    let producto1 = {
        nombre: "Atun Isabel",
        precio: 2.5,
        stock: 100
    }

    let producto2 = {
        nombre: "Mantequilla",
        precio: 1.5,
        stock: 50
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if(producto1.stock>producto2.stock){
        console.log(producto1.nombre+" tiene mayor stock que "+producto2.nombre);
    }
    if(producto1.stock<producto2.stock){
        console.log(producto2.nombre+" tiene mayor stock que "+producto1.nombre);
    }
    if(producto1.stock==producto2.stock){
        console.log(producto1.nombre+" y "+producto2.nombre+" tienen el mismo stock");
    }
}