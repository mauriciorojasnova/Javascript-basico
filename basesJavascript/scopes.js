//Las variables globales pueden accederse localemente

var miNombre = "Mauricio";

function nombre() {
    var miApellido = "Rojas";
    console.log(miNombre + " " + miApellido)
}

//Las variables locales no pueden accederse globalmente

var miNombre = "Mauricio";

function nombre() {
    var miApellido = "Rojas";
}

console.log(miNombre + " " + miApellido) //Esto generaría un error
