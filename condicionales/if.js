//El condicional if ejecuta una serie de acciones cuando una condición es verdadera o falsa.

//Cuando es true se ejecuta lo que está dentro del if.

if (true) {
    console.log("Soy verdadero");
} else {
    console.log("Soy falso");
}

//Cuando es false se ejecuta lo que está dentro del else.

if (false) {
    console.log("Soy verdadero");
} else {
    console.log("Soy falso");
}

//También se pueden usar tres o más condiciones usando el else if. Ejemplo

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu primera vez.");
} else if (edad>18) {
    console.log("Puedes votar de nuevo.");
} else {
    console.log("Aún no puedes votar")
}

//Operador ternario. Para poner dos condiciones en una sola línea.

condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? 'sí soy un uno' : 'No soy uno';