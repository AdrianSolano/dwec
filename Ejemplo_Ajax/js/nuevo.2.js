var procesos = [];
let numero1Correcto = false;
let numero2Correcto = false;

$(function () {

    $('#num1').change(function(){
        validarnumero(array(this)); 
    });

    $('#num2').change(function(){
        validarnumero(array(this));
    });

    $('#formulario').submit(function(event){
        event.preventDefault();
        let input1 = document.getElementById("num1");
        let input2 = document.getElementById("num2");
        validarnumero(array(input1,input2));

    });

    function validarnumero(listaInputs){
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
                   alert("good")
                }else{
                   alert("bad")
                   
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

