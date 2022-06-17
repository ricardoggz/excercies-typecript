/*
    En este ejercicio vamos a cambiar una función 
    normal de javascript a una función de tipo flecha.
 
    function suma( a, b ){
        return (a + b) 
    }
*/

const SUMA = (a : number, b : number) : number => a + b;
console.log(SUMA(3,3));