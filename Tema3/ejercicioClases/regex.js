// function expresionNombre(string) {
//     var mensaje="";
//     if(string.match(/([A-ZÁÉÍÓÚ]{1}[a-záéíóú]{2,})(\s[A-ZÁÉÍÓÚ]{1}[a-záéíóú]{2,})*)/)){
//         mensaje ="Bien";
//     }else{
//         mensaje ="mal";
//     }
//     return mensaje;
// }
// let string="Adrián Solano Fernández";

// console.log(expresionNombre(string));

function expresionNumeroTelefono(string) {
    if(string.match(/() /)){
        mensaje ="Buen telefono ";
    }else{
        mensaje ="Mal telefono ";
    }
    return mensaje;
}
// console.log(expresionNumeroTelefono());

function expresionEmail(string) {
    if(string.match(/^[a-zA-Z0-9]{5,}@[a-z]{5,}(\.[a-z]{2,})*\.es$/)){
        var mensaje ="Buen email " + string;
    }else{
        var mensaje ="Mal email " + string;
    }
    return mensaje;
}
//console.log(expresionEmail("adrysolfer@gmail.es"))


function cuentaPalabras(frase, palabra) {
    let contador = 0;
    let exp = new RegExp(`\\s+${palabra}\\s\\W`,"g");
    let res = frase.match(palabra);
    if (res !==null) {
        res.length;
    }
    

    return res;
}
//console.log(cuentaPalabras("Estoy cansado de esta clase de cliente","denada"));



function esHexadecimal(string) {
    let expr = /^#?([0-9a-fA-F]{6})|([0-9a-fA-F]{3})$/;
    let es = false;

    if (expr.test(string)) {
        es= true + " Es hexadecimal";
    }else{ 
        es =false + " No es hexadecimal ";
    }
    return es;
}

// console.log(esHexadecimal("#1f2f3f"))
// console.log(esHexadecimal("d"))

function decodeWapo(URI) {
    let mensaje="";
    if(decodeURI(URI)){
        mensaje = URI;
    }
    if (decodeURIComponent(URI)) {
        mensaje = URI;
    }
    if (encodeURI(URI)) {
        mensaje = URI;
    }
    return mensaje;
    
}

// console.log(decodeWapo("https://pruebas.com/myPrueba.asp?name=jorge&apellido=baron"))

function sumaNumeroCadena(string) {
    let arr = string.split(" ");
    let sumres = 0;
    for (const string of arr) {
        if (isFinite(string)) {
            sumres += parseInt(string)
        }
    }

    return sumres;
    
}

//console.log(sumaNumeroCadena("Esto es 1 prueba . Mañana serán 2"));
//Excepciones
function eliminarCaracteres(string1,string2) {
try{
    let expr = /[0-9]+/g;
    let resultado = string1.match(expr) | string2.match(expr);
    let div = "";

    for (const string1 of resultado) {
        if (isFinite(string1)){
            div = string1/string2;
        }
    }
    return div;

}catch(err){

}
}

console.log(eliminarCaracteres("pepito34essuperguay","pepito2es mo"));
// 34/2=17 34/0=0.
