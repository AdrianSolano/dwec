$(document).ready(function(){
    $("#formulario").submit(
        {

        }
    );
    $("#nombre").change(
        {
    
        }
    );
}
    
);
$("#formulario").submit(function(){
    alert("Formulario")
})


$("#nombre").change(function(){
    let error =[];
    let campo = $("#nombre");
    if(campo.val() === ''){
        error.push("Error no puede estar vacio ");
    }else{
        let expresion = /^[a-zA-Z]{2,}$/g;

    return error
    }
    return campo;
});
    
$("#apellido").change(function(){
    let error =[];
    let campo = $("#apellido");
    if(campo.val() === ''){
        error.push("Error no puede estar vacio ");
    }else{
        let expresion = /^[a-zA-Z]{2,}$/g;
    }
    return error;
});

$("#edad").change(function(){
    let error =[];
    let campo = $("#edad");
    if(campo.val() === ''){
        error.push("Error no puede estar vacio ");
    }
    return error;
});

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


    