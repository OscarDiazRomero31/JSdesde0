// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = 'oscar'
if (nombre == 'oscar'){ //nombre = 'string' imprime el nombre
    console.log(nombre)
}else{
    console.log('el nombre no coincide')
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = 'oscar'
let contraseña = 'oscar'

if (usuario=='oscar' && contraseña=='oscar'){
    console.log('se muestra el mensaje')
}else{
    console.log('el usuario o la contraseña son erroneas')
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 10

if (numero == 0){
    console.log('el numero es 0')
} else if (numero < 0) {
    console.log('el numero es negativo')
} else {
    console.log('el numero es positivo')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 10
let edadRestante = 18 - edad

if (edad >= 18){
    console.log('Puedes votar')
}else if (edad < 18){
    console.log('Eres menor de edad')
    console.log('Te queda para poder votar: ' +edadRestante+ ' años')
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const mensaje = edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad'
console.log(mensaje)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 7

if (mes >= 1 && mes <=3){
    console.log('Invierno')
}else if (mes >= 4 && mes <= 6){
    console.log('Primavera')
}else if (mes >= 7 && mes <= 9){
    console.log('Verano')
}else if (mes >= 10 && mes <= 12){
    console.log('Otoño')
}else{
    console.log('No hay mas de 12 meses')
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch

let numDias

switch(mes){
    case 0:
        numDias = '31'
        break
    case 1:
        numDias = '28 o 29 (si es bisiesto)'
        break
    case 2:
        numDias = '31'
        break
    case 3:
        numDias = '30'
        break
    case 4:
        numDias = '31'
        break
    case 5:
        numDias = '30'
        break
    case 6:
        numDias = '31'
        break
    case 7:
        numDias = '31'
        break
    case 8:
        numDias = '30'
        break
    case 9:
        numDias = '31'
        break
    case 10:
        numDias = '30'
        break
    case 11:
        numDias = '31'
        break
    default:
        numDias= 'Solo hay 12 meses'
}

console.log(numDias)

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

function mostrarSaludo() {
    const idioma = prompt("Ingresa un idioma (español, inglés, francés, alemán, italiano):");

    if (!idioma) {
        alert("No ingresaste ningún idioma.");
        return;
    }

    let saludo;
    switch (idioma.trim().toLowerCase()) {
        case 'español':
        case 'es':
            saludo = '¡Hola!';
            break;
        case 'inglés':
        case 'en':
            saludo = 'Hello!';
            break;
        case 'francés':
        case 'fr':
            saludo = 'Bonjour!';
            break;
        case 'alemán':
        case 'de':
            saludo = 'Guten Tag!';
            break;
        case 'italiano':
        case 'it':
            saludo = 'Ciao!';
            break;
        default:
            saludo = 'Idioma no soportado.';
    }

    alert(saludo);
}

mostrarSaludo();

// 9. Usa un switch para hacer de nuevo el ejercicio 6
// Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"



// 10. Usa un switch para hacer de nuevo el ejercicio 7