/* 
Realiza un algoritmo que lea un dato de teclado y 
calcule e imprima su inverso. Considere el caso 
especial del valor 0 mostrando el mensaje de error 
correspondiente.
*/

let n = prompt("introduce un numero");
let inverso = 0;

if (n==0){
    alert ("el o no tiene inverso");
}else{
    inverso = n*1/n;
    alert ("el inverso es"+inverso);
}


