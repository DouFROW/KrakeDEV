let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 }
]


agregarPersona = function () {
    let vlNombre = recuperarTexto("txtTexto");
    let vlEdad = recuperarTexto("txtEdad");
    let EdadInt = parseInt(vlEdad);
    let hayErrores = false;
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorEdad", "");

    if (vlNombre.length < 3) {
        mostrarTexto("lblErrorNombre", "Debo ingresar 3 o mas caracteres");
        hayErrores = true;
    }

    if (vlEdad.trim() === "" || !Number.isInteger(Number(vlEdad)) || EdadInt <= 0) {
        mostrarTexto("lblErrorEdad", "Debe ingresar un numero entero");
        hayErrores = true;
    }

    if (!hayErrores) {
        nuevaPersona = {};
        nuevaPersona.nombre = vlNombre;
        nuevaPersona.edad = vlEdad;

        personas.push(nuevaPersona);
        mostrarPersona();
        alert("PERSONA AGREGADA CORRECTAMENTE");
        
    }

}

mostrarPersona = function () {
    let cmpTabla = document.getElementById("tablaPersonas");

    let componentesTabla = "<table>" +
        "<tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th>" +
        "</tr>";
    for (let i = 0; i < personas.length; i++) {
        let objetoPersona = personas[i];
        componentesTabla += "<tr>" +
            "<td>" + objetoPersona.edad + "</td>" +
            "<td>" + objetoPersona.nombre + "</td>" +
            "</tr>"
    }
    componentesTabla += "</table>";
    cmpTabla.innerHTML = componentesTabla;
}

determinarMayor = function(){
    let mayor = encontrarMayor();
    mostrarTexto("lblMenor","");
    mostrarTexto("lblMayor",mayor.nombre+" es mayor, con "+mayor.edad+" años de edad.");
}

encontrarMayor = function () {
    let personaMayor = personas[0];
    let objetoPersona;
    for (let i = 1; i < personas.length; i++) {
        objetoPersona = personas[i];
        console.log("Persona: "+objetoPersona.nombre+" Edad: "+objetoPersona.edad);
        if (personaMayor.edad < objetoPersona.edad) {
            personaMayor = objetoPersona;
        }
    }
    return personaMayor;
}

determinarMenor = function(){
    let menor = encontrarMenor();
    mostrarTexto("lblMayor","");
    mostrarTexto("lblMenor",menor.nombre+" es menor, con "+menor.edad+" años de edad.");
}


encontrarMenor = function(){
    let personaMenor = personas[0];
    let objetoPersona;
    for (let i = 1; i < personas.length; i++) {
        objetoPersona = personas[i];
        console.log("Persona: "+objetoPersona.nombre+" Edad: "+objetoPersona.edad);
        if (personaMenor.edad > objetoPersona.edad) {
            personaMenor = objetoPersona;
        }
    }
    return personaMenor;
}