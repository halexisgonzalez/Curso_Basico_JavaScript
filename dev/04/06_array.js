var frutas  = ["Manzana", "Banana", "Cereza", "Fresa"];
console.log(frutas);

// push, añade elemento al final del array
var masFrutas = frutas.push("Uvas");
console.log(frutas);

// pop, elimina el ultimo elemento del array
var ultimo = frutas.pop("Uvas");
console.log(frutas);

// unshift, agrega un elemento al comienzo del array
var nuevaLongitud = frutas.unshift("Uvas");
console.log(frutas);

// shift, eliminar un elemento al comienzo del array
var borrarFruta = frutas.shift("Uvas");
console.log(frutas);

// obtener posicion
var posicion = frutas.indexOf("Cereza");
console.log(posicion);