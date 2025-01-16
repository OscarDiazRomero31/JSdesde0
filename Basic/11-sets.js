// set

// Declaracion

let mySet = new Set()

console.log(mySet)


// Inicializacion

mySet = new Set(['Oscar', 'Diaz', 'Coco', 31, true, 'oscar@gmail.com'])
console.log(mySet)

// Metodos Comunes

// add y delete

mySet.add('https://oscar.com') //añade al final
console.log(mySet)

mySet.delete('https://oscar.com') //Hay que indicarle el elemento
console.log(mySet)

console.log(mySet.delete('Oscar')) //Retorna true si el valor existe y se ha eliminado
//Retorna false si el valor no se encuentra en el set
console.log(mySet.delete(4)) //false
console.log(mySet)

// has

mySet.has('Diaz')
mySet.has('Oscar')

// size

console.log(mySet.size)

// Convertir set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)


// No admite duplicados

mySet.add('Diaz')
console.log(mySet)
//Solo un Diaz