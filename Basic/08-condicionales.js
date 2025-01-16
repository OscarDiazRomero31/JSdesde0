// if, else if, else

// if (si)

let edad = 21

if (edad == 21){
    console.log('La edad es 21')
}

// else (si no)

if (edad == 30){
    console.log('la edad es 21')
} else {
    console.log('la edad no es 21')
}

// else if (si no, si)

if (edad == 21){
    console.log('la edad es ' +edad)
} else if (edad < 18) {
    console.log('es menor de edad')
} else {
    console.log('la edad no es 21 ,ni es menor de edad')
}

// Operadores Ternarios

const mensaje = edad == 21 ? 'La edad es 21' : 'La edad no es 21'
console.log(mensaje)

// switch

let dia = 0

let diaNombre

switch (dia){
    case 0: 
        diaNombre = 'Lunes'
        break
    case 1: 
        diaNombre = 'Martes'
        break
    case 2: 
        diaNombre = 'Miercoles'
        break
    case 3: 
        diaNombre = 'Jueves'
        break
    case 4: 
        diaNombre = 'Viernes'
        break
    case 5: 
        diaNombre = 'Sabado'
        break
    case 6: 
        diaNombre = 'Domingo'
        break
    default:
        diaNombre = 'Numero de dia incorrecto'
}

console.log(diaNombre)
