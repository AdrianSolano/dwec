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
console.log(invertido(numeros,3,10))
