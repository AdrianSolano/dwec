var procesos = [];
let numero1Correcto = false;
let numero2Correcto = false;

$(function () {

    $('#botonEjemplo').click(function () {

        $.ajax({
            url: "../Tema5/ajax/servidor/datosJSON.php",
            method: "GET",
            type: "JSON",
            beforeSend: function () {
                $("#spinner").show();
            }
        })
            .done(function (datosRespuesta) {
                for (objeto of datosRespuesta) {
                    $("#resultado").append(
                        `<div>${objeto.nombre}-${objeto.genero}</div>`
                    );
                }
                console.log(datosRespuesta);
                alert("YA SE HAN RECIBIDO LOS DATOS");
            })
            .fail(function () {
                alert("ERROR EN LA PETICION");
            })
            .always(function () {
                $("#spinner").hide();
            })

    });

    $('#num1').change(function(){
        validarnumero(this); 
    });

    $('#num2').change(function(){
        validarnumero(this);
    });

    $('#formulario').submit(function(event){
        event.preventDefault();
        numero1Correcto = false;
        numero2Correcto = false;
        validarnumero(document.getElementById("#num1"));
        validarnumero(document.getElementById("#num2"));
        

    });

    function validarnumero(input){
            $.ajax({
                url: "../Ejemplo_Ajax/servidor/datos.php",
                method: "POST",
                data:{num:$(input).val()},
                type: "JSON",
                beforeSend: function () {
                    $("#spinner").show();
                    procesos.push(true);
                }
            })
            .done(function(respuesta){
               if(respuesta === "1"){
                   $(input).addClass("Correcto");
                   if($(input).attr("id")=== "num1"){
                        numero1Correcto = true;
                   }else if($(input).attr("id")=== "num2"){
                        numero2Correcto = true;
                    }
                    comprobarFormulario();
                }else{
                   $(input).addClass("incorrecto");
                   
               }
               procesos.pop(); 
            })
            .fail(function () {
                alert("ERROR EN LA PETICION");
            })
            .always(function () {
                $("#spinner").hide();
            })
    }

    function comprobarFormulario(){
        if(numero1Correcto && numero2Correcto){
            document.getElementById("#formulario").submit();
        }
    }
    
});

