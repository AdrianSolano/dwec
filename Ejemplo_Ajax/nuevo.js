var procesos = [];

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
    })

    $('#num2').change(function(){
        validarnumero(this);
    })
    $('#botonEjemplo2').submit(function(event){
        event.preventDefault();
        $.ajax({
            url: "datos.php",
            method: "POST",
            data:{num:$("#num1").val()},
            type: "JSON",
            beforeSend: function () {
                $("#spinner").show();
                procesos.push(true);
            }
        })
        .done(function(respuesta){
           if(respuesta === "1"){
               alert("Buen numero");
           }else{
               alert("Mal numero");
           }  
           let respuesta2= respuesta;
           if(respuestaPrimero && respuestaSegundo){
               submit();
           }
        })
        .fail(function () {
            alert("ERROR EN LA PETICION");
        })
        .always(function () {
            $("#spinner").hide();
        })
        
    })

    function validarnumero(input){
            $.ajax({
                url: "datos.php",
                method: "POST",
                data:{num:input.value},
                type: "JSON",
                beforeSend: function () {
                    $("#spinner").show();
                    procesos.push(true);
                }
            })
            .done(function(respuesta){
               if(respuesta === "1"){
                   alert("Buen numero");
               }else{
                   alert("Mal numero");
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
    
});

