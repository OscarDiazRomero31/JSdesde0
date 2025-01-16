// 1. Concatena dos cadenas de texto

let equipoFutbol = 'Sevilla F.C'
console.log('Mi equipo de futbol es el: ' +equipoFutbol)

// 2. Muestra la longitud de una cadena de texto

console.log(equipoFutbol.length)

// 3. Muestra el primer y último carácter de un string

console.log(equipoFutbol[0])
console.log(equipoFutbol[10])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(equipoFutbol.toUpperCase())
console.log(equipoFutbol.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let mensaje1 = `mensaje
mensaje`
console.log(mensaje1)

// 6. Interpola el valor de una variable en un string

console.log(equipoFutbol.replace('Sevilla', 'Malaga'))

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(equipoFutbol.replace(equipoFutbol, 'Sevilla-F.C'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(equipoFutbol.includes('Sevilla'))

// 9. Comprueba si dos strings son iguales

let a = 'uno'
let b = 'dos'

console.log(a==b)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(a.length==b.length)