function concatenarCadenas(){

    let clase = 2017;
    let x = "ALUMNO_";
    let y = "DAW_";
    resultado = x + y + clase;
    return resultado === "ALUMNO_DAW_2017";
}//platillas ` $
console.log(concatenarCadenas())

function operadorTernario(){

    let x = 2;
    let y = 0;
    resultado = x > y;
    

    return resultado;

}
console.log(operadorTernario())

function deleteArray(){

    let array = [1,2,3,4,5,6,7,8,9,10];
    delete array[9];

    return array[9] === undefined;

}
console.log(deleteArray())

function crearArray(){

    // let x = [
    //     [1.5]
    //     ["ALUMNOS"],
    //     [new Date()],
    //     [typeof 3],
    //     [typeof "object"],
    //     [undefined],
    //     [null]
    // ];
    let x = [1.5,"ALUMNOS",new Date(),typeof 3, typeof a1 ,undefined,null];
    let a = x[0];
    let b = x[1];
    let c = x[2];
    let d = x[3];
    let e = x[4];
    let f = x[5];
    let g = x[6];

    return  a[0] ===  1.5
        && b[1] ===  "ALUMNOS"
        && c[2] instanceof Date
        && typeof d[3] === "number"
        && typeof e[4] === "object"
        && f[5] === undefined
        && g[6] === null;

}
console.log(crearArray())

function existeElemento(){

    let x = {x1:"prueba1",x2:"prueba1"};

    return "prueba1" in x && "prueba2" in x;

}
console.log(existeElemento())
