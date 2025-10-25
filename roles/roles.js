let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0850045784", nombre: "Douglas", apellido: "Cornejo", sueldo: 1000.0 }
];
let esNuevo = false;

mostrarOpcionesEmpleado = function () {
    mostrarComponente("divEmpleado");
    mostrarEmpleados();
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    deshabilitarComponente("txtBusquedaCedula");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}


mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

deshabilitarCajasTexto = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");

    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
}

buscarEmpleado = function (empleadoCedula) {
    let objetoEmpleado;
    let empleadoEncontrado = null;

    for (let i = 0; i < empleados.length; i++) {
        objetoEmpleado = empleados[i];

        if (objetoEmpleado.cedula == empleadoCedula) {
            empleadoEncontrado = objetoEmpleado;
            esNuevo = false;
            break;
        }

    }
    if (empleadoEncontrado == null) {
        esNuevo = true;
    }
    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    let resultado = buscarEmpleado(empleado.cedula);

    if (resultado == null) {
        empleados.push(empleado);
        return true;

    } else {
        return false;
    }
}

guardar = function () {
    let cmpCedula = recuperarTexto("txtCedula");
    let cmpNombre = recuperarTexto("txtNombre");
    let cmpApellido = recuperarTexto("txtApellido");
    let cmpSueldo = recuperarTexto("txtSueldo");

    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");

    let validarCedula = false;
    let validarNombre = false;
    let validarApellido = false;
    let validarSueldo = false;

    if (cmpCedula.length !== 10) {
        mostrarTexto("lblErrorCedula", "Debe ingresar exactamente 10 dígitos.");
    } else {
        let soloDigitos = true;
        for (let i = 0; i < cmpCedula.length; i++) {
            if (!validarDigito(cmpCedula.charAt(i))) {
                soloDigitos = false;
                break;
            }
        }
        if (!soloDigitos) {
            mostrarTexto("lblErrorCedula", "La cédula solo debe contener dígitos.");
        } else {
            validarCedula = true;
        }
    }

    if (cmpNombre.length < 3) {
        mostrarTexto("lblErrorNombre", "Debe tener al menos 3 caracteres.");
    } else {
        let soloMayusculas = true;
        for (let i = 0; i < cmpNombre.length; i++) {
            if (!validarMayuscula(cmpNombre.charAt(i))) {
                soloMayusculas = false;
                break;
            }
        }
        if (!soloMayusculas) {
            mostrarTexto("lblErrorNombre", "Todas las letras deben ser mayúsculas.");
        } else {
            validarNombre = true;
        }
    }

    if (cmpApellido.length < 3) {
        mostrarTexto("lblErrorApellido", "Debe tener al menos 3 caracteres.");
    } else {
        let soloMayusculas = true;
        for (let i = 0; i < cmpApellido.length; i++) {
            if (!validarMayuscula(cmpApellido.charAt(i))) {
                soloMayusculas = false;
                break;
            }
        }
        if (!soloMayusculas) {
            mostrarTexto("lblErrorApellido", "Todas las letras deben ser mayúsculas.");
        } else {
            validarApellido = true;
        }
    }


    let sueldo = parseFloat(cmpSueldo);
    if (isNaN(sueldo)) {
        mostrarTexto("lblErrorSueldo", "Debe ingresar un número válido.");
    } else if (sueldo < 400 || sueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe estar entre 400 y 5000.");
    } else {
        validarSueldo = true;
    }

    if (validarCedula && validarNombre && validarApellido && validarSueldo) {

        let existente = buscarEmpleado(cmpCedula);
        if (esNuevo === true && existente == null) {
            let nuevoEmpleado = {};
            nuevoEmpleado.cedula = cmpCedula;
            nuevoEmpleado.nombre = cmpNombre;
            nuevoEmpleado.apellido = cmpApellido;
            nuevoEmpleado.sueldo = sueldo;

            let resultado = agregarEmpleado(nuevoEmpleado);

            if (resultado === true) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitarCajasTexto();
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CÉDULA " + cmpCedula);
            }
        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CÉDULA " + cmpCedula);
        }
    }

};



mostrarEmpleados = function () {
    let cmpTable = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    let elementoEmpleados;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleados = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoEmpleados.cedula + "</td>"
            + "<td>" + elementoEmpleados.nombre + "</td>"
            + "<td>" + elementoEmpleados.apellido + "</td>"
            + "<td>" + elementoEmpleados.sueldo + "</td>"
            + "</tr>";

    }
    contenidoTabla += "</table>";
    cmpTable.innerHTML = contenidoTabla;
}

ejecutarNuevo = function () {
    esNuevo = true;
    habilitarComponente("txtBusquedaCedula");
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}