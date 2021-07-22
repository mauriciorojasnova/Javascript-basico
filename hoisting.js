//Hoisting es cuando las variables y funciones se procesan antes de correr cualquier tipo de código.

//Imprimir variable antes de ser declarada en el código

console.log(miNombre); //Se imprime undefined ya que la variable sólo se declaró y no inicializó
var miNombre;
miNombre = "Diego";

//Imprimir función antes de ser declarada en el código

console.log(saludar('Mauricio')); //Imprime correctamente la función
function saludar(nombre) {
    return "Hola " + nombre
}
