// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(`La suma de los números del 1 al 100 es: ${suma}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ['Ana', 'Juan', 'Carlos', 'María', 'Lucía'];
for (let nombre of nombres) {
    console.log(nombre);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Hola, ¿cómo estás?";
let vocales = 'aeiouáéíóú';
let contadorVocales = 0;
for (let letra of texto.toLowerCase()) {
    if (vocales.includes(letra)) {
        contadorVocales++;
    }
}
console.log(`El número de vocales en el texto es: ${contadorVocales}`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [2, 3, 4, 5];
let producto = 1;
for (let numero of numeros) {
    producto *= numero;
}
console.log(`El producto de los números es: ${producto}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let cadena = "JavaScript";
let cadenaInvertida = "";
for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
}
console.log(`La cadena invertida es: ${cadenaInvertida}`);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
console.log(`Los primeros 10 números de Fibonacci son: ${fibonacci.join(', ')}`);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let
