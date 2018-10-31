class votos{
    constructor(numeroVot){
        this.numeroVot=numeroVot;
    }
}

function votosMayoresCuatro(numeroVot){
    if(numeroVot >= 4){
        return numeroVot + true;
    }else{
        return numeroVot + false;
    }
}

function incrementar(voto){
    voto.numeroVot++;
}

function arrayDefinitivoMap(numeroVot){
    return numeroVot ;
}

function mediaVotos(total,voto){
    let suma = voto;
    let media =suma/3;
    return suma = total+voto;
}

var vot1 = new votos(1);
var vot2 = new votos(3);
var vot3 = new votos(4);
var vot4 = new votos(5);

var arrayVotos = [vot1,vot2,vot3,vot4];

console.log(arrayVotos.some(votosMayoresCuatro));

arrayVotos.forEach(incrementar);
console.log(arrayVotos);
console.log(arrayVotos.map(arrayDefinitivoMap))

console.log(arrayVotos.reduce(mediaVotos));





