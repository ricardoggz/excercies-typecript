/*
   Cree una función con parametros obligatorios, opcionales y por defecto
   donde:

   NOMBRE = obligatorio
   PODER  = opcional
   ARMA   = por defecto = "arco" 
*/

(()=>{
    function getHero(name : string, power? : string, gun : string = "Arco") : string {
        return `
            Hero Name : ${name}
            Power : ${power}
            gun : ${gun}
        `;
    };
    console.log(getHero("Green Arrow"));
})();
