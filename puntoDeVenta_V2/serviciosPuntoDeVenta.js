calcularSubTotal = function (precio, cantidad) {
    let cmpPrecio = recuperarTexto(precio);
    let cmpCantidad = recuperarTexto(cantidad);
    let subTotal = cmpPrecio * cmpCantidad;
    let subTotalRedondeado = subTotal.toFixed(2);
    return subTotalRedondeado;
}

calcularValorDescuento = function (monto, porcentajeDescuento) {
    let cmpDescuento = recuperarTexto(porcentajeDescuento)
    let descuento = monto * (cmpDescuento / 100);
    return descuento;
}

calcularIVA = function (monto, descuento) {
    let montoConDescuento = monto - descuento;
    let valorIVA = (montoConDescuento * 12) / 100;
    let FloatIVA = valorIVA.toFixed(2);
    let IVA = parseFloat(FloatIVA);
    return IVA;
}

calcularTotal = function (subtotal, valorDescuento, IVA) {
    let calculoTotal = (subtotal - valorDescuento) + IVA;
    let total = calculoTotal.toFixed(2);
    return total;
}

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    if (cantidad < 3) {
        mostrarTexto("txtDescuentoConfirm", "No tiene descuento");
    } else if (cantidad >= 3 && cantidad <= 5) {
        let descuentoAplicado = subtotal * 0.03;
        let descuentoRedondeado = descuentoAplicado.toFixed(2);
        mostrarTexto("txtDescuentoConfirm", "Tiene el 3% de descuento");
        return descuentoRedondeado;

    } else if (cantidad >= 6 && cantidad <= 11) {
        let descuentoAplicado = subtotal * 0.04;
        let descuentoRedondeado = descuentoAplicado.toFixed(2);
        mostrarTexto("txtDescuentoConfirm", "Tiene el 4% de descuento");
        return descuentoRedondeado;

    } else if (cantidad >= 12) {
        let descuentoAplicado = subtotal * 0.05;
        let descuentoRedondeado = descuentoAplicado.toFixed(2);
        mostrarTexto("txtDescuentoConfirm", "Tiene el 5% de descuento");
        return descuentoRedondeado;
    }
}

esProductoValido = function (producto, idComponenteError) {
    let hayErrores = false;
    let nombreProductoValido = producto.length;

    if (producto == "") {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (nombreProductoValido > 10) {
        mostrarTexto(idComponenteError, "El nombre del producto es muy largo");
        hayErrores = true;
    }

    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }

    return !hayErrores;

}

esCantidadValida = function (cantidad, idComponenteError) {
    let hayErrores = false;

    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }

    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, "Ingrese un numero entre 0 y 100");
        hayErrores = true;
    }

    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }

    return !hayErrores;
}

esPrecioValido = function (precio, idComponenteError) {
    let hayErrores = false;

    if (isNaN(precio)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }

    if (precio < 0 || precio > 50) {
        mostrarTexto(idComponenteError, "Ingrese un numero entre 0 y 50");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }

    return !hayErrores;
}


