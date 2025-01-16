// 1. Crea un array que almacene cinco animales
let animales = ['Perro', 'Gato', 'Pajaro', 'Cocodrilo', 'Caballo'];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift('Elefante'); // Añade al principio
animales.push('Tigre'); // Añade al final
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1); // Elimina el tercer elemento (índice 2)
console.log(animales);

// 4. Crea un set que almacene cinco libros
let libros = new Set(['El Hobbit', '1984', 'Cien años de soledad', 'Drácula', 'La Odisea']);
console.log(libros);

// 5. Añade dos más. Uno de ellos repetido
libros.add('El Principito'); // Añade uno nuevo
libros.add('El Hobbit'); // Intenta añadir uno repetido (no se añadirá porque es un Set)
console.log(libros);

// 6. Elimina uno concreto a tu elección
libros.delete('1984'); // Elimina '1984'
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1, 'Enero'],
    [2, 'Febrero'],
    [3, 'Marzo'],
    [4, 'Abril'],
    [5, 'Mayo'],
    [6, 'Junio'],
    [7, 'Julio'],
    [8, 'Agosto'],
    [9, 'Septiembre'],
    [10, 'Octubre'],
    [11, 'Noviembre'],
    [12, 'Diciembre']
]);
console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
    console.log(`El mes 5 es: ${meses.get(5)}`);
} else {
    console.log('El mes 5 no existe en el mapa.');
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set('verano', [6, 7, 8]); // Meses de verano
console.log(meses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let frutas = ['Manzana', 'Banana', 'Cereza', 'Manzana', 'Uva'];
let frutasSet = new Set(frutas); // Transforma el array a un Set
let datos = new Map(); // Crea el mapa
datos.set('frutas', frutasSet); // Almacena el Set en el Map
console.log(datos);
