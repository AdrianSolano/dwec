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
console.log(cuentaPalabras("Estoy cansado de esta clase de cliente","denada"));