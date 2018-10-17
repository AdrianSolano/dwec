function intercambiar(string){
    let cadenafinal="";
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === string.charAt(i).toLocaleLowerCase() ) {
            cadenafinal = cadenafinal + string.charAt(i).toLocaleUpperCase();
        }else{
            cadenafinal = cadenafinal + string.charAt(i).toLocaleUpperCase();
        }
    }
    return cadenafinal;
}



function insertarTexto(cadena_principal, texto_incluir, pos) {
    if(typeof(pos) == "undefined") {
    pos = 0;
    }
    if(typeof(texto_incluir) == "undefined") {
    texto_incluir= '';
    }
    return`${cadena_principal.slice(0, pos)}${texto_incluir}${cadena_principal.slice(pos)}`;
    }


function reducirTamañoCadena(string) {
    return string.split("").splice(0,num_palabras).join(" ");
}

let frase = "Este Es EL ejemplO"
//console.log(intercambiar(frase))
console.log(insertarTexto(frase,"PEPE",18))
