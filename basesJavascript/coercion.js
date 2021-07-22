//Coerción es cambiar el tipo de una variable.

//Coerción implícita

var a = 4 + "7"; //Se cambia implicitamente el número 4 a string

typeof a; //string

var b = 4 * "7"; //Se cambia implicitamente el string 7 a number

typeof b; //number

//Coerción explícita

var c = 20;

var d = String(c); //Convertir c a string

var e = Number(d); //Convertir d a número
