
function createForm(){

let form1 = document.createElement("form");
    form1.setAttribute("method","post");
    document.body.appendChild(form1);

for(let i=0; i< 11 ; i++){
    let div =document.createElement("div");
    form1.appendChild(div)
    for (let j = 0; j < i; j++) {
        let inputs =document.createElement("input");
        div.appendChild(inputs);
         
    }
}
}
console.log(createForm());