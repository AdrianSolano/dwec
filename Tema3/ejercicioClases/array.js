Array = function(id) {
this.id = id;
}
var a = new Array(1);
var b = [];
// console.log(a.hasOwnProperty("id")); // true
// console.log(b.hasOwnProperty("id")); // false
// console.log(a.push); // false, el método pushno existe en a
// console.log(b.push); // true, el método pushexsiteen b
// b.push(2);
// console.log(b);

let misNavegadores= [
    "Chrome",
    "Firefox",
    "Opera",
    "Safari"
]
// console.log(misNavegadores.length)
// misNavegadores.pop();
// console.log(misNavegadores)
// misNavegadores.shift();
// console.log(misNavegadores)

function compararl(x,y){
    let res=0;
    if (x>y) {
        res=1
    }else if(x<y){
        res=-1;
    }
    return res;
}

let numeros= [1,2,3,4,5,6,7,8,9,10]
// console.log(numeros.sort())
// console.log(numeros.sort(compararl))
let mezcla1=[1,2,3,4];
let mezcla2=[2,3,4];

function mezclarDos(x,y){
    let z = x.concat(y);
    z.sort();
    let aux=[];
for(let i = 0; i < z.lenght; i++){
    if(z[i]!== z[i-1] || z[i]!== z[i+1]){
        aux.push(z[i])
    }
}
return aux ;
}
// console.log(mezclarDos(mezcla1,mezcla2))

function invertido(x,prin,fin) {
    let cpy = x.slice(prin,fin);
    cpy.reverse();
    let cpy2 = x.slice(0,3)
    let res = cpy2.concat(cpy);
   
    return res;
}
// console.log(invertido(numeros,3,10))


function esAdulto(edad) {
    return edad >= 18;
}
// console.log(edades.filter(esAdulto) );
//Funcion flecha
// console.log(edades.filter( x => x >=18) );

function impar(numero) {
    if (numero % 2) {
        return numero + " es impar";
    }else{
        return numero + " es par"
    }
}
// console.log(impar(3))


var arr =[1,2,undefined,null,1/0,"Prueba","1"]

function arrey(ar) {
    ar=arr;
}
//console.log(arr.filter(arrey));

class voto{
    constructor(bueno){
        this.bueno=bueno;
    }
}
var vot1 = new voto(true);
var vot2 = new voto(false);
var vot3 = new voto(true);

var votos = [vot1,vot2];
// console.log(votos.filter());

var edades= [15, 22 ,16, 40,18];
// console.log(edades.find(esAdulto));
// console.log(edades.find( x => x >=39));

var cad1 = "Holaquetal";
var cad2 = "Hola que tal";
var cad3 = "Hola ";

let arrayCadenas = [cad2,cad1,cad3];  

function cadenas(cad) {
    let arr= cad.match(/([\s])/g);
    return arr === null;
}

// console.log(arrayCadenas.find(cadenas));
// console.log(numeros.some(impar))

var edades= [15, 22 ,16, 40,18];
function calcularEdadPerro(edad){
console.log(edad * 7);
}
// edades.forEach(calcularEdadPerro);

function sumarEdades(total,num) {
    return total + num;
}
console.log(edades.reduce(sumarEdades));

function calcularEdadPerro2(edad){
    return edad * 7;
}
console.log(edades.map(calcularEdadPerro2));

function sumarEdades(total,num) {
    return total + num;
}
console.log(edades.reduce(sumarEdades));



