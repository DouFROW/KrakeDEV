calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto = recuperarFloat("txtPrecio"); // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad = recuperarInt("txtCantidad"); // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT

    //variables para almacenar los retornos de las funciones
    
    if (esProductoValido(nombreProducto, "lblError1") & esCantidadValida(cantidad, "lblError2") & esPrecioValido(precioProducto, "lblError3")) {

        let valorSubtotal = calcularSubTotal("txtPrecio", "txtCantidad");
        let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        let valorIVA = calcularIVA(valorSubtotal, valorDescuento);
        let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);

        mostrarSubtotal("lblSubtotal", valorSubtotal);
        mostrarDescuento("lblDescuento", valorDescuento);
        mostrarIVA("lblValorIVA", valorIVA);
        mostrarTotal("lblTotal", valorTotal)
    }else{
        mostrarSubtotal("lblSubtotal", "0.0");
        mostrarDescuento("lblDescuento", "0.0");
        mostrarTexto("txtDescuentoConfirm","");
        mostrarIVA("lblValorIVA", "0.0");
        mostrarTotal("lblTotal", "0.0")
    }
}


limpiar = function () {
    textoEnCaja("txtProducto", "");
    textoEnCaja("txtCantidad", "");
    textoEnCaja("txtPrecio", "");

    subTextos("lblDescuento", "0.0");
    subTextos("txtDescuentoConfirm", "")
    subTextos("lblSubtotal", "0.0")
    subTextos("lblValorIVA", "0.0")
    subTextos("lblTotal", "0.0")
    subTextos("lblError1", "")
    subTextos("lblError2", "")
    subTextos("lblError3", "")

}
