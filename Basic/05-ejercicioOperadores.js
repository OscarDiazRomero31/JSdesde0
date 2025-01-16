// 1. Crea una variable para cada operación aritmética

let a = 10
let b = 20

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a%b)
console.log(a/b)
console.log(a**b)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let miVariable = b
console.log(miVariable)
miVariable += b
console.log(miVariable);
miVariable -= b
console.log(miVariable)
miVariable *= b
console.log(miVariable)
miVariable /= b
console.log(miVariable)
miVariable %= b
console.log(miVariable)
miVariable **= b
console.log(miVariable)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(a<b)
console.log(b>a)
console.log((a+a)==b)
console.log(a!=1)
console.log((b/2)==a)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// a=10 b=20
console.log(a>b)
console.log(b<a)
console.log((b+b)==a)
console.log(b!=20)
console.log((b/a)==1)

// 5. Utiliza el operador lógico and

console.log(a==10 && b==20) //true

// 6. Utiliza el operador lógico or

console.log(a==10 || b==0) //true

// 7. Combina ambos operadores lógicos

console.log(a==10 && b==20 || (a+b)==30) //true

// 8. Añade alguna negación

console.log(!(a=10)) //false, ya que invierte el valor del resultado

// 9. Utiliza el operador ternario

const haceCalor = false
haceCalor ? console.log('Es verdad') : console.log('No, hace tela de frio')

// 10. Combina operadores aritméticos, de comparáción y lógicas

// a=10 b=20
let resultado = a+b
console.log(resultado)
console.log(resultado==(a+b))
console.log(!(resultado && a+b || a**3)) //false, ya que la condicion se cumple porque todos sus valores son 3 pero el (!) invierte el resultado

