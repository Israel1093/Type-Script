class Producto{
    constructor(public nombreProduc:string, public precioProduct: number){
    }    
}
class Factura{
    constructor(public producto:Producto[]){
    }
    calcular(): void{
        var subt=0;
        var total=0;
        var iva=0;
        this.producto.forEach(item =>{
            subt=item.precioProduct;
            iva=subt*0.12;
            total=(subt*0.12)+subt;
            console.log("Producto: "+item.nombreProduc+"Subtotal: "+subt+"IVA: "+iva+"total a pagar: "+total);
        })
    }
}
var p1:Producto = new Producto("esfero",0.25);
var p2:Producto = new Producto("lapiz",0.30);
var p3:Producto = new Producto("borrador",0.50);
var array:Producto[]=[p1,p2,p3];
var facturar:Factura=new Factura(array);
facturar.calcular();

