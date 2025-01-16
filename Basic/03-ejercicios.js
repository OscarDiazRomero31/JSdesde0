// 1. Escribe un comentario en una linea

// Esto es un comentario.

// 2. Escribe un comentario en varias lineas

/**
 * Esto es 
 * un comentario en
 *  varias lineas
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let nombre = 'oscar'
let numero = 31
let boleano = true
let myUndefined
let nulo = null
let mySymbol = Symbol('mysymbol')
let myBigInt = BigInt(1000000000)

// 4. Imprime por consola el valor de todas las variables

console.log(nombre)
console.log(numero)
console.log(boleano)
console.log(myUndefined)
console.log(nulo)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof nombre)
console.log(typeof numero)
console.log(typeof boleano)
console.log(typeof myUndefined)
console.log(typeof nulo)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

nombre = 'manolo'
numero = 55
boleano = false
mySymbol = Symbol('mysymbol2')
myBigInt = BigInt(20000000000)

// Mostrar por pantalla
console.log(nombre)
console.log(numero)
console.log(boleano)
console.log(myUndefined)
console.log(nulo)
console.log(mySymbol)
console.log(myBigInt)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
// 9. A continuación, modifica los valores de las constantes
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

const nombre2 = 'OSCAR'
// nombre2 = 'OSCAR2'
const numero2 = 33
// numero2 = 20
const boleano2 = true
// boleano2 = false
const mySymbol2 = Symbol('mysymbol2')
// mySymbol2 = Symbol('mysymbol3')
const myBigInt2 = BigInt(1000000000000)
// myBigInt2 = BigInt(2000000000000)

console.log(nombre2)
console.log(numero2)
console.log(boleano2)
console.log(mySymbol2)
console.log(myBigInt2)


