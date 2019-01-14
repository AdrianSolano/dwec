function escribirResultado(identificadorElemento){
    return function(textoRespuesta){
        document.getElementById(identificadorElemento).innerHTML = "";
        document.getElementById(identificadorElemento).appendChild(document.createTextNode(textoRespuesta));
    }
}

function funcionAjaxSincrona(){
    alert("NO HAY SINCRONO");
}

function funcionAjaxAsincrona(){

    alert("SE VA A EJECUTAR LA PETICIÓN");
    fetch("servidor/datos.php", {
        method: 'get'
    }).then(function(response){ return response.text()})
        .then(escribirResultado("resultadoAsincrono"))
        .catch(function(err) {
            console.log(err);
            alert("SE HA PRODUCIDO UN ERROR");
    });
}

function funcionAjaxAsincronaError(){
    alert("SE VA A EJECUTAR LA PETICIÓN");
    fetch("servidor/datos.php", {
        method: 'get'
    }). then(function(){
        $("error").html("ERROR");
    }).catch(function(err) {
            console.log(err);
            document.getElementById("resultadoAsincronoError").appendChild(document.createTextNode(err));
            alert("SE HA PRODUCIDO UN ERROR");
    });
}

function funcionAjaxAsincronaGET(){

    alert("SE VA A EJECUTAR LA PETICIÓN");
    fetch("servidor/datosGET.php?nombre=PEPE&apellido=FLORES", {
        method: 'get'
    }).then(function(response){ return response.text()})
        .then(escribirResultado("resultadoAsincronoGET"))
        .catch(function(err) {
            console.log(err);
            alert("SE HA PRODUCIDO UN ERROR");
    });
}

function funcionAjaxAsincronaPOST(){
    alert("SE VA A EJECUTAR LA PETICIÓN");
    let form = new FormData();
    form.append("nombre","PEPE");
    form.append("apellido","FLORES JIMENEZ");
    fetch("servidor/datosPOST.php", {
        method: 'post',
        body: form
    }).then(function(response){ return response.text()})
        .then(escribirResultado("resultadoAsincronoPOST"))
        .catch(function(err) {
            console.log(err);
            alert("SE HA PRODUCIDO UN ERROR");
        });

}

function funcionAjaxAsincronaXML(){
    alert("SE VA A EJECUTAR LA PETICIÓN");
    fetch("servidor/datosXML.php", {
        method: 'get'
    }).then(function(response){ return response.text()})
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(tratarResultadoXML)
        .catch(function(err) {
            console.log(err);
            alert("SE HA PRODUCIDO UN ERROR");
        });
}

function funcionAjaxAsincronaJSON(){
    alert("SE VA A EJECUTAR LA PETICIÓN");
    fetch("servidor/datosJSON.php", {
        method: 'get'
    }).then(function(response){ return response.json()})
        .then(tratarResultadoJSON)
        .catch(function(err) {
            console.log(err);
            alert("SE HA PRODUCIDO UN ERROR");
        });
}

function tratarResultadoXML(textoXMLRespuesta){
    let  datos=textoXMLRespuesta;

    // Tenemos que recorrer el fichero XML empleando los métodos del DOM
    let peliculas = datos.documentElement.getElementsByTagName("PELICULA");

    // En la variable salida compondremos el código HTML de la tabla a imprimir.
    let salida="<table border='1'><tr><th>NOMBRE</th><th>GENERO</th><th>DIRECTOR</th><th>DURACION</th></tr>";

    // Hacemos un bucle para recorrer todos los elementos CD.
    for (let i=0;i<peliculas.length;i++){
        salida+="<tr>";

        let nombre =peliculas[i].getElementsByTagName("NOMBRE");
        salida+="<td>" + nombre[0].firstChild.nodeValue + "</td>";

        let genero =peliculas[i].getElementsByTagName("GENERO");
        salida+="<td>" + genero[0].firstChild.nodeValue + "</td>";

        let director =peliculas[i].getElementsByTagName("DIRECTOR");
        salida+="<td>" + director[0].firstChild.nodeValue + "</td>";

        let duracion =peliculas[i].getElementsByTagName("DURACION");
        salida+="<td>" + duracion[0].firstChild.nodeValue + "</td>";

        // Cerramos la fila.
        salida+="</tr>";
    }

    // Cuando ya no hay más peliculas cerramos la tabla.
    salida+="</table>";

    // Imprimimos la tabla dentro del contenedor resultados.
    document.getElementById("resultadoAsincronoXML").innerHTML=salida;
}

function tratarResultadoJSON(respuesta){
    var resultados= respuesta;
    let salida="<table border='1'><tr><th>NOMBRE</th><th>GENERO</th><th>DIRECTOR</th><th>DURACION</th></tr>";

    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida+="<tr><td>"+objeto.nombre+"</td><td>"+
        objeto.genero+"</td><td>"+objeto.director+"</td><td>"+
        objeto.duracion +"</td></tr>";
    }

    salida+="</table>";

    document.getElementById("resultadoAsincronoJSON").innerHTML=salida;

}