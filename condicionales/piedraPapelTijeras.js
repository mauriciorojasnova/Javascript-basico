//Código que simula el juego de piedra, papel o tijeras.

//Declarar variables

var jugador = 'piedra';
var computadora = 'papel';

//Condicionales

if ((jugador == 'piedra' && computadora == 'tijeras') || (jugador == 'papel' && computadora == 'piedra') || (jugador == 'tijeras' && computadora == 'papel') ) {
    console.log('Ganó el jugador.');
} else if (jugador === computadora) {
    console.log('Hay un empate.');
} else {
    console.log('Ganó la computadora.');
}