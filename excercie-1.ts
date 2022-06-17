/*
    var nombre;
    nombre = "Miguelo";
    var edad;
    edad = 30;
    var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
    Este código está hecho en JavaScript y 
    hay que pasarlo a TypeScript empleando 
    variables “let”, constantes y tipado de
    datos.
*/

(()=>{
    let nombre : string;
    nombre = "Miguelo";

    let edad : number;
    edad = 30;

    const PERSONAJE = {
        nombre : nombre,
        edad : edad,
    };

    console.log(typeof PERSONAJE);
})();
