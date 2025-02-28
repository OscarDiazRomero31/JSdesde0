// Diseñar un algoritmo para hallar el valor absoluto de un número leído de teclado y presentarlo en pantalla.

let n = prompt("Introduce un numero");
let abs;

if (n>=0){
    abs = n;
}else{
    abs = -n;
}

alert ("el valor abs del numero es" +abs);