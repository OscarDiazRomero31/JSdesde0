// Operadores

// Operadores Arigmeticos

let a = 5
let b = 10

console.log(a + b) //suma
console.log(a - b) //resta
console.log(a * b) //multiplicacion
console.log(a / b) //division

console.log(a % b) //modulo
console.log(a ** b) //exponente 

a++ //incremento
console.log(a++)

b-- //decremento
console.log(b)

// Operadores Asignacion

let miVariable = 2
console.log(miVariable);
miVariable += 2
console.log(miVariable);

miVariable -= 2
miVariable *= 2
miVariable /= 2
miVariable %= 2
miVariable **= 2

// Operadores Comparacion

console.log(a)

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

console.log(a == b)
console.log(a == 7) //Igualdad por valor
console.log(a == '7') //Igualdad por valor
console.log(a === a) //Igualdad por identidad (Tipo y Valor)
console.log(a === 7)
console.log(a === '7') //Mismo valor distinto tipo

console.log(a != 7) //Distinto
console.log(a !== '7')

console.log(0 == false) // 0 es true
console.log(1 == false) // resto de numeros false

console.log(0 == '')
console.log(0 == ' ')
console.log(0 == 'Hola')
console.log(0 === '')
console.log(undefined == null) //true (ausencia de valor es verdadero)
console.log(undefined === null) //false (no es el mismo tipo)

// Operadores logicos

// and (&&)
console.log(5>10 && 15>20)
console.log(5<10 && 15<20)
console.log(5<10 && 15>20)
console.log(5>10 && 15>20 && 30>40)
// En el momento que una sea falsa (false)

// or (||)
console.log(5>10 || 15>20)
console.log(5<10 || 15<20)
console.log(5<10 || 15>20)
console.log(5>10 || 15>20 || 30>40)

console.log(5>10 && 15>20 || 30<40) // (true) se cumple la ultima condicion
// Si se cumple 1 es verdadero (true)

// not (!)
console.log(!false)
console.log(!(5>10 && 15>20))
console.log(!(5>10 || 15>20))
// Invierte el valor del resultado

// Operadores ternarios

const estaLLoviendo = true 

estaLLoviendo ? console.log('Esta lloviendo') : console.log('No esta lloviendo')



