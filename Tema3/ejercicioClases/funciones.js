
// console.log(sumarNumeros(5,10));

// function sumarNumeros(x, y) {
// return x +y;
// }

var sumarNumeros= function(x, y) {
return x +y;
}

let prueba = function(x) {
    return `hola ${x}`;
}
// console.log(prueba());
    
function factorial(n){
if ((n === 0) || (n === 1))
return 1;
else{
return (n * factorial(n -1));
    }
}
// console.log(factorial(2));


function fibonacci(){
    let num1=1;
    let num2=0;
    let suma=0;
    let i=0;
    for (i=0;  i <10 ; i++) { 
         suma =num1+num2;
         num1=num2;
         num2=suma;
    }
    return suma;
}
// console.log(fibonacci());

function multiply(a, b = 5) {
return a*b;

}
// console.log(multiply(5));

function multiply(multiplicador, ...valores) {
    // console.log(arguments);
    let i = 0;
    for(i = 0;i < valores.length; i++){
        valores[i] = valores[i] *multiplicador;
    }
    return valores
}
var arr= multiply(2,1,"pepe",3);
// console.log(arr); // [2, 4, 6]
//CLOSURE Función dentro de función
function creaSumador(x) {
    return function(y) {
        let x = 10;
        return x + y;
    };
}
var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

// console.log(suma5(2));
// console.log(suma10(2));

// var a = 12;
// (function() {alert(a);
// } ) ();
// var a = 5;
// (function() {var a = 12; 
//     alert(a);
// } ) ();


// var x = (function() {
// var a = 12;
// return (function() {
// alert(a);
// });
// })();
// x();

// var a = 10;
// var x = (function() {
// var y = function() {
// var a = 12;
// };
// return function() {
// alert(a);
// }
// })();
// x();

// var a = 10;
// (function() {
// var a = 15; 
// window.x= function() {alert(a); }
// }) ();
// x();

// function incrementaA() {
//     var a = 0;
//     a++;
//     console.log(a);
//     }
//     incrementaA();

// var a = 0;
// function incrementaA() {
// a++;
// console.log(a);
// }
// incrementaA();
// incrementaA();
// incrementaA();

// function incrementaA() {
//     let a = 0;
//     return function(){
//     a +=1;
//     return a;
//     }
//     }
//     let incrementador = incrementaA();
//     alert(incrementador());
//     alert(incrementador());
//     alert(incrementador());

// function sumarNumeros(a,b){
//     alert( a + b);
//     }
// var execute = sumarNumeros(10, 40);
// setTimeout(execute, 3000);

function principal(a,b){
    let dividor3 = creaDividor(3);
    let dividor4 = creaDividor(4);
    let numero1 = dividor3(a);
    let numero2 = dividor4(b);
    return numero1 + numero2;

}
function creadorPrincipal(x,y){
    return function(a,b){
        let dividirX = creaDividor(x);
        let dividirY = creaDividor(y);

        return dividirX(a)+ dividirY(b);
    }
}
function dividor3(y){
    return function(y){
        if (y ===0 || y % 3 !==0 ) {
            return y;
        }else{
            return dividor3(y/3);
        }
    }
}

function creaDividor(x){
    function dividirX(y){
        if (y ===0 || y % x !==0 ) {
            return y;
        }else{
            return dividirX(y/x);
        }
    }
    return dividirX;
}
console.log(creadorPrincipal(3,3))