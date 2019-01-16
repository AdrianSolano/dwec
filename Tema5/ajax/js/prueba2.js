document.addEventListener("DOMContentLoaded", function () {
    mostrarNombre();
    mostrarNombre2();
});
function comprobarEstadoPeticion() {
    switch (this.readyState) {

        case 0: document.getElementById('estado2').innerHTML += "0 - Sin iniciar.<br/>";
            break;
        case 1: document.getElementById('estado2').innerHTML += "1 - Cargando.<br/>";
            break;
        case 2: document.getElementById('estado2').innerHTML += "2 - Cargado.<br/>";
            break;
        case 3: document.getElementById('estado2').innerHTML += "3 - Interactivo.<br/>";
            break;
        case 4:
            document.getElementById('estado2').innerHTML += "4 - Completado.";
            if (this.status == 200) {
                document.getElementById("resultado2").appendChild(document.createTextNode(this.responseText));
                alert("Terminó la petición AJAX");
            }
            break;
    }
}


function mostrarNombre() {
    let boton = document.getElementById("boton");
    boton.addEventListener('click', function () {
        xhr = new objetoXHR();

        xhr.open('GET', 'servidor/datos2.php?edad=21&trabajo=ninguno', false);

        // xhr.onreadystatechange = comprobarEstadoPeticion;

        xhr.send(null);


        let respuesta = xhr.responseText;

        let div = document.getElementById("resultado");
        div.appendChild(document.createTextNode(respuesta));

    })
}

function mostrarNombre2() {
    let boton = document.getElementById("boton2");
    boton.addEventListener('click', function () {
        xhr = new objetoXHR();

        xhr.open('GET', 'servidor/datos2.php?edad=21&trabajo=ninguno', true);

        xhr.onreadystatechange = comprobarEstadoPeticion;

        xhr.send(null);


        let respuesta = xhr.responseText;

        let div = document.getElementById("resultado2");
        div.appendChild(document.createTextNode(respuesta));

    })
}