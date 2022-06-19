/*
Declarar un tipo personalizado llamado ‘Producto’ que incluya:

Nombre:string
Precio:number
oferta:boolean opcional

Crear un producto ‘botijo’ que valga 100€ y otro ‘gaita’, que valga 150€ y esté de oferta.

Crear una función precioConIva que tenga como parámetro un ‘Producto’, 
que devuelva un number y que lo que devuelva sea el precio del producto multiplicado por 1.21
*/

type  Product = {
    name: string,
    price : number,
    sale? : boolean,
};

let botijo : Product = {
    name: "botijo",
    price: 100,
};

let gaita : Product = {
    name : "gaita",
    price : 150,
    sale : true,
}

function getPriceTax ( product : Product) : number{
    return (product.price * 0.16) + product.price; 
}

console.log(getPriceTax(botijo));