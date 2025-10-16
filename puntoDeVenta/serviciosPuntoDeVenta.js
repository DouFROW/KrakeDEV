calcularSubTotal = function(precio,cantidad){
    let cmpPrecio = recuperarTexto(precio);
    let cmpCantidad = recuperarTexto(cantidad);
    let subTotal = cmpPrecio * cmpCantidad;
    return subTotal;
}

calcularValorDescuento = function(monto,porcentajeDescuento){
    let cmpDescuento = recuperarTexto(porcentajeDescuento)
    let descuento = monto*(cmpDescuento/100);
    return descuento;
}

calcularIVA = function(monto,descuento){
    let montoConDescuento = monto - descuento;
    let valorIVA = (montoConDescuento*12)/100; 
    let FloatIVA = valorIVA.toFixed(2);
    let IVA = parseFloat(FloatIVA);
    return IVA;
}

calcularTotal = function(subtotal,valorDescuento,IVA){
    let calculoTotal = (subtotal - valorDescuento)+IVA;
    let total = calculoTotal.toFixed(2);
    return total;
}
