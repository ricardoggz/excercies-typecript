/*
Crea la clase Rombo, la cual debe tener dos propiedades:
DiagonalVertical y DiagonalHorizontal.
Le añadiremos un constructor al que le pasaremos los valores
anteriores cuando instanciemos el objeto.
Y también debe de tener un método que calcule el area, que será
la multiplicación de DiagonalVertical * DiagonalHorizontal dividido entre 2.
Este método devolverá un número.
*/

class Rombo {
    constructor(
        public DiagonalVertical : number,
        public DiagonalHorizontal : number
    ){};
    public calcArea(): number {
        const area : number = (this.DiagonalVertical * this.DiagonalHorizontal) / 2;
        return area;
    }
};

let newRombo : Rombo = new Rombo(3,3);
console.log(newRombo.calcArea());