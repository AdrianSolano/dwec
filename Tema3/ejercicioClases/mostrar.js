function mostrarNombre(){
    let inputNombre=document.querySelectorAll('#name')
    // console.log(inputNombre[3].value)
    // for (let iterator of inputNombre) {
    //     
    // }
    // inputNombre.forEach(element => {
    //     console.log(inputNombre);
    // });
    for(i = 0; i < inputNombre; i++){
        console.log(inputNombre[i].value);
    }
    inputNombre.forEach(element => {
        console.log(inputNombre);
    });

}
