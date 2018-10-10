//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b


function quienEsMayor(a,b){
    // if(comprobarnumero(a) if(typeof a==="number" && b==="number"){
            
    // }
    let resultado;
    if (a>b){
        resultado= 1;
    }else if(a<b){
        resultado= -1;
    }else{
        resultado= 0;
    }
    return "Devuelve: "+resultado
    
}console.log(quienEsMayor(10,5))
//console.log(quienEsMayor(1/0,2/0))

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elementos){
    let suma=0;
    if(elementos instanceof Array){
    for (let elementos of elementos) {
    // for( let i=0;i<elementos.length ;i++){
           if (elementos[i] % 2==0)
            suma+ elementos[i];
    }
}
    return "Suma de pares: "+suma;

}
//console.log(sumarElementosPares())

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elemetos){
    let numeromayor=0 //Number.MIN_VALUE;
    if(elemetos instanceof Array){
     if(elemetos.length>0){
    for(let i=0; i<elemetos.length;i++){
        if(elemetos[i]>numeromayor){ 
        numeromayor -= elemetos[i];
    }
}
}
}
 return "Numero mayor del array: "+numeromayor;
}
//console.log(escogerValorMasGrande())

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(string){
    let cadenaInvertida ="";
    if(typeof (string) ==="string"){
        for (let x of string) {
            cadenaInvertida = x + cadenaInvertida  ;
        }

    // while (x>=0) {
    //   cadenaInvertida = cadenaInvertida + string.charAt(x);
    //   x--;
    // }
}
    return "Cadena invertida: "+cadenaInvertida;
}
console.log(invertirUnaPalabra("arriba españa"));

function validarDNI(dni){
    // let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
    let numero = 0;
    let resultado=false;
    if(typeof dni ==="string"){
        resultado=false;
        if(dni.length===9){
            resultado=false;
        for (let x of dni) {
            let valor = parseInt(x);
        }
    }
}
    return dni;
    
}
console.log(validarDNI("2423233Z"))



//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(elementos){

}


