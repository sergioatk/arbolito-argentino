import {Cotizacion} from '/modulos/clases/Cotizacion.js'

export async function buscarEnAPI() {
    const cotizaciones = await fetch('https://api.bluelytics.com.ar/v2/latest');
    const respuesta = await cotizaciones.json();

    const { oficial: dolarOficial, blue: dolarBlue, oficial_euro: euroOficial, blue_euro: euroBlue, last_update: fecha } = respuesta;
    
    const nuevaCotizacion = new Cotizacion(dolarOficial, dolarBlue, euroOficial, euroBlue, fecha)
    
    return nuevaCotizacion;
  
   
};