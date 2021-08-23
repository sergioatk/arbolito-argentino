export class Cotizacion {
    constructor(dolarOficial, dolarBlue, euroOficial, euroBlue, fecha) {
        this.dolarOficial = [dolarOficial.value_buy, dolarOficial.value_sell, dolarOficial.value_avg];
        this.dolarBlue = [dolarBlue.value_buy, dolarBlue.value_sell, dolarBlue.value_avg,];
        this.euroOficial = [euroOficial.value_buy, euroOficial.value_sell, euroOficial.value_avg];
        this.euroBlue = [euroBlue.value_buy, euroBlue.value_sell, euroBlue.value_avg];
        this.fecha = fecha;
    }
}
