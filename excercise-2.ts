/*
    Crear una tipo personalizado en TypeScript a partir de este código JavaScript:
    var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};
*/

(()=> {
    type Spiderman = {
        nombre : string,
        poderes : string[],
    };

    let spiderman : Spiderman = {
        nombre : "Peter Parker",
        poderes : ["trepar", "fuerza", "agilidad", "telas de araña"],
    };

    spiderman.poderes.forEach(item => console.log(item));
})();