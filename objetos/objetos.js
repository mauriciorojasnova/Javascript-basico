//Un objeto es un ente que tiene asociado datos y funciones.

//Sintaxis

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`); //El this hace referencia al objeto padre, en este cado miAuto
    }
};

//Aceder a los valores del objeto

miAuto.marca
miAuto.annio

//Aceder a una función dentro del objeto

miAuto.detalleDelAuto()