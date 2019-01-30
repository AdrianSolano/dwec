var procesos = [];
let numero1Correcto = false;
let numero2Correcto = false;

$(function () {

    $('#numero1').change(function () {
        validarnumero($("#numero1"));
    });

    $('#numero2').change(function () {
        validarnumero($("#numero2"));
    });

    $('#formulario').submit(function (event) {
        event.preventDefault();
        validarFormulario();

    });

    function validarnumero(input) {
        let datosPost = {};
        datosPost[input.attr("name")] = input.val();
        realizarValidacion(datosPost, null);
    }
    function validarFormulario() {
        let datosPost = $("#formulario").serialize();
        realizarValidacion(datosPost, function () {
            // document.getElementById("formulario").submit();
            sumarNumero();
        })

    }
    function realizarValidacion(datosPost, funcionCall) {
        $.ajax({
            url: "../Ejemplo_Ajax/servidor/datos.php",
            method: "POST",
            data: datosPost,
            type: "JSON",
            beforeSend: function () {
                $("#spinner").show();
                procesos.push(true);
            }
        })
            .done(function (errores) {
                let todoCorrecto = true;
                for (inputName in errores) {
                    let erroresInput = errores[inputName];
                    $(`#${inputName}`).removeClass("inputCorrecto");
                    $(`#${inputName}`).removeClass("inputErroneo");
                    let divErrores = $(`#${inputName}`).next("div");
                    divErrores.html("");
                    if (!$.isEmptyObject(erroresInput)) {
                        $(`#${inputName}`).addClass("inputErroneo");
                        for (tipoError in erroresInput) {
                            divErrores.append(`<div>${erroresInput[tipoError]}</div>`);
                        }
                        todoCorrecto = false;
                    } else {
                        $(`#${inputName}`).addClass("inputCorrecto");
                    }
                }

                if (todoCorrecto && ejecutarFormulario !== null) {
                   funcionCall();
                }
            })
            .fail(function () {
                alert("HA HABIDO UN ERROR EN LA PETICIÓN");
            })
            .always(function () {
                procesos.pop();
                if (procesos.length === 0) {
                    $("#spinner").hide();
                }
                if (ejecutarFormulario) {
                    $("#boton").prop("disabled", false);
                    $("#formulario input").prop("readOnly", false);
                }
            })
    }
    function sumarNumero(){
        let datosPost = $("#formulario").serialize();
        $.ajax({
            url: "../Ejemplo_Ajax/servidor/sumar.php",
            method: "POST",
            data: datosPost,
            type: "JSON",
            beforeSend: function () {
                $("#spinner").show();
                procesos.push(true);
            }
        })
            .done(function (resultado) {
               $("#resultado").html(resultado);
            })
            .fail(function () {
                alert("HA HABIDO UN ERROR EN LA PETICIÓN");
            })
            .always(function () {
                procesos.pop();
                if (procesos.length === 0) {
                    $("#spinner").hide();
                }
            })
    }

});

