//Código que simula el juego de piedra, papel o tijeras.

//Declarar variables

var jugador = 'piedra';
var computadora = 'papel';

//Switch

switch (true) {
    case jugador == 'piedra' && computadora == 'tijeras':
        console.log('Ganó el jugador.');
        break;
    case jugador == 'papel' && computadora == 'piedra':
        console.log('Ganó el jugador.');
        break;
    case jugador == 'tijeras' && computadora == 'papel':
        console.log('Ganó el jugador.');
        break;
    case jugador === computadora:
        console.log('Hay empate.');
        break;
    default:
        console.log('Ganó la computadora.');
}
