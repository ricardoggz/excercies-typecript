/*Crea una clase llamada Product, la cual tendrá un constructor
  que reciba como parámetro el nombre del producto y su precio.
  Dentro de la clase crea un get que retorne el precio del producto.
  Después crea una clase llamada ProductWhitTax que herede de la clase
  Product, la cual recibirá los mismos parámetros que la clase Product
  y un parámetro que sea tax = 0.16, seguido de ello, crea un get que
  retorne el precio del producto con el impuesto agregado.
*/
class Product {
    constructor(
        public name : string,
        public price : number,
    ){};
    get getPrice() : number{
        return this.price;
    };
};
let newProduct = new Product("Milk", 5);
//console.log(newProduct.price);

class ProductWhitTax extends Product{
    constructor(
        name : string,
        price : number,
        public tax : number = 0.16,
    ){ super(name, price) };
    get getPrice(): number {
        const TAX = super.getPrice * this.tax;
        return super.getPrice + TAX;
    };
};

let newProductWhitTax : ProductWhitTax;
newProductWhitTax = new ProductWhitTax("Milk", 3);
console.log(`The price whit tax is = ${newProductWhitTax.getPrice}`);