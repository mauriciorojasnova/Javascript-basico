//Sirve para validar distintos casos.
//En caso de que no se cumpla ningún caso, se ejecuta el default.

var numero = 1

switch (numero) {
    case 1:
        console.log("Soy uno");
        break;
    case 10:
        console.log("Soy un diez");
        break;
    case 100:
        console.log("soy un cien");
        break;
    default:
        console.log("No soy nada");
}
