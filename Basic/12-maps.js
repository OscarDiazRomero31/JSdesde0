// Map

// Declaracion

let myMap = new Map()
console.log(myMap)

// Inicializacion

myMap = new Map([
    ['name', 'Oscar'],
    ['email', 'oscar@gmail.com'],
    ['age', 37]
])

console.log(myMap)

// Metodos y propiedades

// set

myMap.set('alias', 'coco') //añade un elemento
console.log(myMap)

myMap.set('name', 'Oscar Diaz Romero')
console.log(myMap)

// get

console.log(myMap.get('name'))
console.log(myMap.get('equipo')) //No lo encuentra(Undefined)

// has

console.log(myMap.has('equipo')) //Retorna false ya que no lo encuentra
console.log(myMap.has('age')) //Devuelve true

// delete

myMap.delete('email') //Borra el elemento
console.log(myMap)

// keys y values

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()
console.log(myMap)


