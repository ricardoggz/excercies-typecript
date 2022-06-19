/*
A partir del siguiente array que se proporciona:
var valores = [true, 5, false, "hola", "adios", 2];
- Determinar cual de los dos elementos de texto es mayor
- Utilizando exclusivamente los dos valores booleanos del array,
  determinar los operadores necesarios para obtener un resultado true y otro resultado false
- Determinar el resultado de las cinco operaciones matemáticas realizadas
  con los dos elementos numéricos.
*/

let valores: (boolean | number | string)[];
valores = [true, 5, false, "hola", "adios", 2];

//Determinar cual de los dos elementos de texto es mayor:
let strMayor: string = "";
valores.forEach((item) => {
  if (typeof item === "string") {
    console.log(item);
    if (item.length >= strMayor.length) {
      strMayor = item;
    }
  }
});
console.log(`El string mayor es : ${strMayor}`);
