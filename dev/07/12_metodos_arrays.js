var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];

// metodo filter: crea un nuevo array con todos los elementos que pasan una prueba (función de filtro) que se proporciona como argumento.
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

//console.log(articulosFiltrados);

// metodo map: crea un nuevo array con los resultados de aplicar una función a cada elemento del array original
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

//console.log(nombreArticulos);

// metodo find: devuelve el primer elemento de un array que cumple con la condición implementada
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

//console.log(encuentraArticulo);

// metodo forEach: no devuelve un nuevo array, sino que simplemente ejecuta la función dada en cada elemento del array original.
articulos.forEach(function(articulo){
    //console.log(articulo.nombre);
});

// metodo some: Devuelve true si al menos un elemento cumple con la condición; de lo contrario, devuelve false. ( si al menos un elemento de un array cumple con la condición)
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);s