$(document).ready(
    crearDivs()
);

function quitarDivs(){

    if (div.find("input")){
        $("div").empty();
    }else{
        $("div").empty();
    }

}

function crearDivs() {
    
    for(let i = 1; i <= 10; i++){
        let div = $('<div></div>');
        let h1 = $('<h1></h1>');
        h1.text("Div Nº "+i);
        div.append(h1);
        $(document.body).append(div);
        for(let j = 1; j <= i; j++){
            let input = $('<input></input>');
            $(div).append(input);
            input.val(i+"."+j);
            input.attr("name","nodo"+i+j);
            if ( j % 2 || i % 2 ){
                input.addClass("azul");
            }else{
                input.addClass("naranja");
            }
            div.find("input")


        }
        
    }

}



