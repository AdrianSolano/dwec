function comprobarExpresionRegular(expresion,input){
    let esCorrecto = false;
    if(expresion.test(input.value)){
        input.classList.remove("invalido");
        input.classList.add("valido");
        esCorrecto = true;
    }else{
        input.classList.add("invalido");
        input.classList.remove("valido");
    }
    return esCorrecto;
}

function comprobarNombre(event){
    let expresion = /^[a-zA-Z]{2,}$/g;
    let inputNombre = event.target
    return comprobarExpresionRegular(expresion,inputNombre);
}

function comprobarDuracion(event){
    let expresion = /^[0-9]{6,24}$/g;
    let inputDuracion = event.target;
    return comprobarExpresionRegular(expresion,inputDuracion);
}

function comprobarJefeProyecto(event){
    let expresion = /^([a-zA-Z]*[A-Z]*[a-zA-Z]*[\s]){2,}/g;
    let inputJefeProyecto = event.target;
    return comprobarExpresionRegular(expresion,inputJefeProyecto);
}

function comprobarFormulario(event){
    event.preventDefault();
    let esFormularioCorrecto = false;
    let esNombreCorrecto = comprobarNombre();
    let esDuracionCorrecto = comprobarDuracion();
    let esJefeProyectoCorrecta = comprobarJefeProyecto();

    if(esNombreCorrecto && esDuracionCorrecto && esJefeProyectoCorrecta){
        esFormularioCorrecto = true;
        event.target.submit();
    }else{
        alert("Hay errores en le formulario");
    }

    return esFormularioCorrecto;
}

document.addEventListener("DOMContentLoaded",function(event){

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit",function(event)
{
    comprobarFormulario(event);
});

let inputNombre = document.getElementById("nombre");
inputNombre.addEventListener("change",function(event){
    comprobarNombre(event);
});

let inputDuracion = document.getElementById("duracion");
inputDuracion.addEventListener("change",function(event)
{
    comprobarDuracion(event);
});

let inputJefeProyecto = document.getElementById("jefeProyecto");
inputJefeProyecto.addEventListener("change",function(event){
    comprobarJefeProyecto(event)
});

});
