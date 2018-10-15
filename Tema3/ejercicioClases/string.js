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



function añadirCadena(string,posicion){
    let cadenaAñadir= " de Pepe ";
    if (typeof()) {
        
    }
    for (let i = posicion; i <= string.length; i++) {
        string = cadenaAñadir.concat(cadenaAñadir);
    }
    return string;
}


function reducirTamañoCadena(string) {
    return string.split("").splice(0,num_palabras).join(" ");
}

let frase = "Este Es EL ejemplO"
//console.log(intercambiar(frase))
console.log(añadirCadena(frase))
