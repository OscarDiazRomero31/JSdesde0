// Array

// Declaracion

let myArray = [] //Recomendable
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicializacion

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4]
myArray2 = new Array(1,2,3,4)

console.log(myArray)
console.log(myArray2)

myArray = ['Oscar', 'Diaz', 'Coco', 31, true]
myArray2 = new Array('Oscar', 'Diaz', 'Coco', 31, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = 'Oscar'
// myArray2[0] = 'Diaz'
myArray2[1] = 'Coco'

console.log(myArray2)

myArray = []
myArray[2] = 'Oscar'
// myArray[0] = 'Diaz'
myArray[1] = 'Coco'

console.log(myArray)

// Metodos Comunes

myArray = []

// push y pop

myArray.push('Oscar')
myArray.push('Diaz')
myArray.push('Romero')
myArray.push('21')
console.log(myArray)

console.log(myArray.pop()) // Elimina el ultimo del array y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // Elimina el primer elemento del array y lo devuelve
console.log(myArray)

myArray.unshift('Oscar', 'Romero')
console.log(myArray)

// length

console.log(myArray.length) // Longitud del Array

// clear

myArray = []
myArray.length = 0 //alternativa (no)
console.log(myArray)

// slice

myArray.push('Oscar', 'Diaz', 'Coco', 31)

let myNewArray = myArray.slice(0, 2)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(0, 2) // Elimina los elementos desde el primer numero y el segundo numero es la cantidad de elementos que borras
console.log(myArray)


myArray = ['Oscar', 'Diaz', 'Coco', 31]
myArray.splice(1, 2, 'Nuevo elemento')
console.log(myArray)



