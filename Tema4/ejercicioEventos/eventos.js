
let bodi = document.getElementById("bodi");
let tekla = document.getElementById("inputTecla");
let arxivo = document.getElementById("archivo");
// let textoraton = document.getElementById("");
let beton = document.getElementById("boton");

function comprobarbotones(event){
    let betones = event.change;
    
}

function comprobarTekla(event){
    let inputTecla = event.key;
    console.log("Tecla presionada: " + inputTecla);

}

function comprobarBodi(event){
    let inputX =" Esto es X: "+ event.screenX ;
    let inputY =" Esto es Y: "+ event.screenY ;
    console.log(inputX);
    console.log(inputY);
}
function comprobarArxivo(event){
    // let arxivo = event.change;
    alert("KUIDAO ARXIBO")
}
function comprobarArxivo(event){
    // let arxivo = event.change;
    alert("KUIDAO ARXIBO")
}


document.addEventListener("DOMContentLoaded", function(event) {
    bodi.addEventListener("click", function(event){
        comprobarBodi(event);  
    });
    tekla.addEventListener("keypress",function(event){
        comprobarTekla(event);
    })
    arxivo.addEventListener("dragover", function(event){
        comprobarArxivo(event);
    })

});