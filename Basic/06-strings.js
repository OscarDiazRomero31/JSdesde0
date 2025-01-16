// Cadenas de texto (strings)

// Concatenacion 
let nombre = 'Oscar'
let saludo = 'Hola, ' + nombre + '!' 
console.log(saludo)
console.log(typeof saludo)

// Longitud
console.log(saludo.length) //Tamaño cadena de texto

// Acceso a caracter
console.log(saludo[0]) //se empieza desde el 0
console.log(saludo[1])

// Metodos comunes
console.log(saludo.toUpperCase()) //transforma mayusculas
console.log(saludo.toLowerCase()) //transforma minusculas
console.log(saludo.indexOf('Oscar')) //donde empieza la cadena
//cuando no encuentra (-1)

//si incluye estas palabras
console.log(saludo.includes('Oscar'))
console.log(saludo.includes('Diaz'))

console.log(saludo.slice(0, 10))
//muestra del caracter 0 al 10 

console.log(saludo.replace('Oscar', 'Romero'))
//remplaza una cadena por otra, si la encuentra

// Templates literals (plantilla literales)

let mensaje =`Hola, este es mi
nombre Oscar`
console.log(mensaje)

let email = 'oscar@gmail.com'
console.log(`Hola, ${nombre}!, Tu email es: ${email}`)

