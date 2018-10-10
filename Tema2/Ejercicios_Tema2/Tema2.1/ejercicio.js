//PARA INCLUIR COMENTARIOS
/*
*  PARA INCLUIR VARIAS LINEAS DE COMENTARIOS
*
* */


//ESTE SCRITP ES PARA PRACTICAR LAS DECLARACIONES DE VARIABLES

///esta funcion hay que corregirla para poder porbar las demas
function corregirDeclaraciones(){
    var boi = new Object();
    var ejemplo = "EJEMPLO";
    var prueba = 123;
    var prueba_ejemplo = "EJERCICIO";
    var prueba = "PRUEBA";
    var prue_ba = "PRUEBA";

    return true;
}

function declararNumeros(){
    let numA=5;
    let numB=2;
    return typeof numA === "number"
       && typeof numB === "number"
       && numA > numB;
}
console.log(declararNumeros());//+

function declararString(){
    let cadena="string";
    return cadena === "string"
        && typeof cadena === "string";
}
console.log(declararString());

function noDefinido(){
    var x = 1;
    var y = 1;
    return x === 1
        && y === 1;
}
console.log(noDefinido());

function declararSymbol(){
    let x = Symbol();
    return typeof x === "symbol";
}
console.log(declararSymbol());

function declararFecha(){
    let hoy = new Date();
    return hoy instanceof Date;

}
console.log(declararFecha());

function declararExpresionRegular(){
    let expresion = new RegExp("[1-8]{9}");
    return expresion instanceof RegExp;
}
console.log(declararExpresionRegular());

function declararFuncion(){
    let funcion = function(){ return "TRUH"}
    return funcion instanceof Function;
}
console.log(declararFuncion());


function declararObjeto(){
    let objeto = new Object();
    return objeto instanceof Object;
}
console.log(declararObjeto());

function declararArray(){
    let lista = [1,2,3,4,"Correcto"];
    return lista instanceof Array
            && lista.length === 5
            && lista[4] === "Correcto";

}
console.log(declararArray());


function declararArrayTipo(){
    let listaEnteros = new Int32Array(10)
    return listaEnteros instanceof Int32Array
            && listaEnteros.length === 10;

}
console.log(declararArrayTipo());


function declararVariableGlobal(){
    window.x = "SOY gLOBAL";
    return window.x
            && x === "SOY gLOBAL";

}
console.log(declararVariableGlobal());

function declararPrototipo(){
    let prototipo = function(){
	}

    let objeto = new prototipo();
    return objeto.__proto__ === prototipo.prototype;

}
console.log(declararPrototipo());

function declaracionConRetraso(){

    var resultado = y === 35;

    var y = 35;

    return resultado;
}
console.log(declaracionConRetraso());


function declaracionLet(){
    let x = 2;
    if(x > 1){
        var y = "bien";
    }
    return y === "bien";
}
console.log(declaracionLet());

function declaracionConst(){
    let valor = 10;
    valor += 20;
    valor = 30;
    return valor === 30;
}
console.log(declaracionConst());

