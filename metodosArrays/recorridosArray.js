//Crear una array que contenga objetos

var articulos = [
    { nombre:"Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 2500},
    { nombre: "Audifonos", costo: 1700}
];

//Método filter para filtrar objetos y crear un nuevo array con estos.

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
})

//Método map para mapear determinados artítulos y crear un nuevo array.

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

//Método find para crear un array con los objetos existenes que deseo buscar.

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

//Método for each para filtrar sobre el array ya creado sin crear un nuevo array.

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Método some para regresar una validación de True o False.

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});