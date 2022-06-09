"use strict";
class Producto {
    constructor(nombreProduc, precioProduct) {
        this.nombreProduc = nombreProduc;
        this.precioProduct = precioProduct;
    }
}
class Factura {
    constructor(producto) {
        this.producto = producto;
    }
    calcular() {
        var subt = 0;
        var total = 0;
        var iva = 0;
        this.producto.forEach(item => {
            subt = item.precioProduct;
            iva = subt * 0.12;
            total = (subt * 0.12) + subt;
            console.log("Producto: " + item.nombreProduc + "Subtotal: " + subt + "IVA: " + iva + "total a pagar: " + total);
        });
    }
}
var p1 = new Producto("esfero", 0.25);
var p2 = new Producto("lapiz", 0.25);
var p3 = new Producto("borrador", 0.25);
var array = [p1, p2, p3];
var facturar = new Factura(array);
facturar.calcular();
