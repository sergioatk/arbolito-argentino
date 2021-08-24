export async function mostrarCotizacion(APIcallback) {
    const nuevaCotizacion = await APIcallback();

    const $cuadrosDolarOficial = document.querySelectorAll('.dolar-oficial');
    const $cuadrosDolarBlue = document.querySelectorAll('.dolar-blue');
    const $cuadrosEuroOficial = document.querySelectorAll('.euro-oficial');
    const $cuadrosEuroBlue = document.querySelectorAll('.euro-blue');

    // Renderizar Fecha
    const $fecha = document.querySelector('#fecha');
    $fecha.textContent += nuevaCotizacion.fecha.split('T')[0];
    // Renderizar Cotizacion Dolar Oficial
    $cuadrosDolarOficial.forEach((cuadro, i) => {
        const $nuevoValor = document.createElement('span');
        $nuevoValor.textContent = nuevaCotizacion.dolarOficial[i]
        cuadro.appendChild($nuevoValor)
    })

    // Renderizar Cotizacion Dolar Blue
    $cuadrosDolarBlue.forEach((cuadro, i) => {
        const $nuevoValor = document.createElement('span');
        $nuevoValor.textContent = nuevaCotizacion.dolarBlue[i]
        cuadro.appendChild($nuevoValor)
    })

    // Renderizar Cotizacion Euro Oficial
    $cuadrosEuroOficial.forEach((cuadro, i) => {
        const $nuevoValor = document.createElement('span');
        $nuevoValor.textContent = nuevaCotizacion.euroOficial[i]
        cuadro.appendChild($nuevoValor)
    })

    // Renderizar Cotizacion Euro Blue
    $cuadrosEuroBlue.forEach((cuadro, i) => {
        const $nuevoValor = document.createElement('span');
        $nuevoValor.textContent = nuevaCotizacion.euroBlue[i]
        cuadro.appendChild($nuevoValor)
    })

    
}