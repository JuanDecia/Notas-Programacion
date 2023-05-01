window.addEventListener('load', function() {

    function aplicarDescuento() {

        // Get Valor Compra

        const compraField = document.getElementById('valor-compra');
            console.log(compraField);

        const valorCompra = compraField.value;
            parseInt(valorCompra);
            console.log(valorCompra);

        // Get Result
        
        let descuentoHTML = valorCompra * 0.15;

        let totalHTML = valorCompra - descuentoHTML;

        descuentoAplicado.innerHTML = descuentoHTML + ' ARS$'
        totalAplicado.innerHTML += totalHTML + ' ARS$'
    }

    const descuentoAplicado = document.getElementById('aplicar-descuento');
    const totalAplicado = document.querySelector("#total-aplicado");

    const descuento = document.getElementById('descuento');
        descuento.addEventListener('click', aplicarDescuento)

})