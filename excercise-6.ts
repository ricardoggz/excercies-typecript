/*
Declarar una variable como string y asignarle cadena y numero para ver si da error
Declarar una variable como array de cadenas y lo mismo, probar si se le pueden asignar
otros valores o da error

Declarar una función triple(numero:number):number que nos devuelva el triple de
un número y ver si funciona y que pasa si pasamos una cadena o asignamos el resultado 
a una variable de tipo string.
*/

let myString : string;
//myString = 21; //Error
let myArray : string[];
//myArray = [1,2,3]; //Error

function triple(number : number ) : number {
    return number * 3;
};

console.log(triple(10));
//console.log(triple("3")); //Error
//myString = triple(3); //Error