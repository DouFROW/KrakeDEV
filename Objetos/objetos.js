probarAtributos = function () {
    let persona = {
        nombre: "Douglas",
        apellido: "Cornejo",
        edad: 17,
        estaVivo: true
    }

    console.log(persona.nombre);
    console.log(persona.edad);

    if (persona.estaVivo == false) {
        console.log("no esta vivo");
    } else {
        console.log("esta vivo");
    }
}

crearProducto = function () {
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

    if (producto1.stock > producto2.stock) {
        console.log(producto1.nombre + " tiene mayor stock que " + producto2.nombre);
    }
    if (producto1.stock < producto2.stock) {
        console.log(producto2.nombre + " tiene mayor stock que " + producto1.nombre);
    }
    if (producto1.stock == producto2.stock) {
        console.log(producto1.nombre + " y " + producto2.nombre + " tienen el mismo stock");
    }
}

modificarAtributos = function () {
    let cuenta = {
        numero: "401516351",
        saldo: 10
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function () {
    let cliente = {
        cedula: "146515",
        nombre: "Juan"
    }

    let cliente1 = {};

    cliente1.nombre = "Romeo";
    cliente1.apellido = "Santos";
    cliente1.cedula = "1514512";

    //cliente.nombr="xxx";
    //Si no encuenta el atributo lo que hace es crearlo y le asgina el valor que se le esta pasando.
}

probarIncrementoSaldo = function(){
    let cuentaUsuario = {numero: "156514", saldo: 34.0};

    incrementarSaldo(cuentaUsuario,100);
    console.log(cuentaUsuario.saldo);
}

probarDeterminarMayor = function(){
    let persona1={nombre:"Daniel",edad:23};
    let persona2={nombre:"Maria",edad:34};
    let mayor = determinarMayor(persona1,persona2);

    if(mayor !== null){
        console.log("El mayor entre "+persona1.nombre+" y "+persona2.nombre+", es "+mayor.nombre);
    }
}

incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo += monto;
}

determinarMayor = function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona1.edad < persona2.edad) {
        return persona2;
    } else {
        return null;
    }
}