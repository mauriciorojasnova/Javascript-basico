//Los for permiten correr un loop hasta que se rompa determinada condición.

var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes (estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//Otra forma de usar un loop es con for of.

for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}