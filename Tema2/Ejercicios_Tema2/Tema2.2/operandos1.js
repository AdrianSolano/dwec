// EJERCICIOS CON LOS OPERANDOS

function asignacionDeValoresSumar(){

    let x = 1;
    let y = 2;
    x += y;

    return x === 3;
}
debugger;
console.log(asignacionDeValoresSumar())


function asignacionDeValoresRestar(){

    let x = 1;
    let y = 6;
    x = x - y;

    return x === 5;
}
debugger;
console.log(asignacionDeValoresSumar())

function asignacionDeValoresMultiplicacion(){

    let x = 5;
    let y = 7;
    x = x * y;

    return x === 35;
}
debugger;
console.log(asignacionDeValoresMultiplicacion())

function asignacionDeValoresResto(){

    let x = 3;
    let y = 2;
    x = x % y;

    return x === 1;
}
debugger;
console.log(asignacionDeValoresResto())

function comparacionIgualdad(){

    let x = 1;
    let y = "1";
    resultado = x==y;

    return resultado;
}
debugger;
console.log(comparacionIgualdad())

function comparacionIgualdadEstricto(){

    let x = 1;
    let y = 1;
    resultado = x===y;

    return resultado;
}
debugger;
console.log(comparacionIgualdadEstricto())

function compararcionMayorIgual(){

    let x = 0;
    let y = 1;
    resultado = x<=y

    return resultado;
}
debugger;
console.log(compararcionMayorIgual())


function incremento(){

    let x = 4;
    x++;

    return x === 5;
}
debugger;
console.log(incremento())


function decremento(){

    let x = 6;
    x--;

    return x === 5;
}
debugger;
console.log(decremento())


function igualdadIncremento(){

    let x = 4;
    x++;


    return x++ === 5;
}
debugger;
console.log(igualdadIncremento())

function comparacionAND(){
    var x = "hello";
    var y = "hello";
    x = x & y;

    return resultado;
}
debugger;
console.log(comparacionAND())

function comparacionOR(){
    var x = "hello";
    var y = "hello";
    x = x | y;

    return resultado;
}
debugger;
console.log(comparacionOR())

function comparacionNOT(){
    var x = "";
    resultado != x;

    return resultado;
}
debugger;
console.log(comparacionNOT())
